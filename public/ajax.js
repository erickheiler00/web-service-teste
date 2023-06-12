((window, document, undefined) => {
    const ajax = (url, callback) => {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)
        xhr.addEventListener('load', event => {
            callback(null, xhr.res, event)
        })
        xhr.addEventListener('error', callback)
        xhr.send(null)
    }
    const render = ($target, data) => {
        const trs = data.map(item => {
            return `<tr>
                <td>${item._id}</td>
                <td>${item.titulo}</td>
                <td>${item.autor}</td>
                <td>${item.editora}</td>
                <td>${item.ano}</td>
                <td>${item.edicao}</td>
                <td>${item.genero}</td>
            </tr>`
        })
        $target.querySelector('tbody').innerHTML = trs.join('')
    }
    const $target = document.getElementById('target')
    ajax('http://localhost:3000/livro', (err, res) => {
        const data = JSON.parse(res)
        render($target, data)
    })
})(window, document)