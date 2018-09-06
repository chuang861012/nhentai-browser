export default function (query = null, page = 1) {
    const url = query ? `http://127.0.0.1:5000/get?query=${query}&page=${page}` : `http://127.0.0.1:5000/get?page=${page}`;
    return fetch(url).then(res => res.json())
        .then((res) => {
            return res
        });
}