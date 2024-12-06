export function readStorageUrl(path) {
    //return "https://hayugo.edu.vn/api" + path;
    if (!path) {
        return null;
    }
    return "http://172.30.64.1:7700/api" + path;
}