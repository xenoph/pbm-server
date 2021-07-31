import { SchemaDirectiveVisitor } from 'apollo-server-express';

export default class AuthDirective extends SchemaDirectiveVisitor {
    visitObject(type) {
        this.ensureFieldsWrapped(type);
        type._requiredAuthRole = this.args.requires;
    }

    visitFieldDefinition(field, details) {
        this.ensureFieldsWrapped(details.objectType);
        field._requiredAuthRole = this.args.requires;
    }

    ensureFieldsWrapped(objectType) {
        if (objectType._authFieldsWrapped) return;
        objectType._authFieldsWrapped = true;

        const fields = objectType.getFields();

        Object.keys(fields).forEach(fieldName => {
            const field = fields[fieldName];
            const { resolve = defaultFieldResolver } = field;

            field.resolve = async function (...args) {
                const requiredRole =
                    field._requiredAuthRole || objectType._requiredAuthRole;

                if (!requiredRole) {
                    return resolve.apply(this, args);
                }

                const context = args[2];
                const { user } = context;

                if (!user) {
                    throw new Error('not authorized');
                }

                return resolve.apply(this, args);
            };
        });
    }
}
