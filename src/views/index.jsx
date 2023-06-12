const React = require('react')

function IndexPage(props){
    return (
        <>
            <html lang="pt-br">
                <head>
                    <meta charset="UTF-8"/>
                    <meta name="viewport" content="widtg=device-width, initial-scale=1.0"/>
                    <title>Livros</title>
                </head>
                <body>
                    <h1>{props.title}</h1>
                    <p>{props.message}</p>
                </body>
            </html>
        </>
    )
}

module.exports = IndexPage
