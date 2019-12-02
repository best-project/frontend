export const getHashData = (path, name) => {
    const url = new URL(path);

    return url.hash.replace(`#${name}=`, '');
};
