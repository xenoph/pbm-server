
if(!window.env){
    // TODO: Check if this can be a source of infinite reload
    setTimeout(() => {
        window.location.reload();
    }, 1500);
}

export default window.env;
