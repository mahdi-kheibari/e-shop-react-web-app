import ErrorLayout from '@/components/layouts/ErrorLayout';
function Error({ statusCode }) {
    return <ErrorLayout statusCode={statusCode} />
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error