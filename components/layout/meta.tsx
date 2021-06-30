import Head from 'next/head'
//@ts-ignore
const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta charSet='utf-8' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            {/* <link rel='icon' href='/favicon.ico' /> */}
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Shubham Kumar - Senior Software Engineer',
    keywords: 'web development, programming, networking,cryptography',
    description: 'Software Engineer. Lover of web and apisources.',
}

export default Meta
