export function generateStaticParams() {
    return ['test'];
}

export default async function Page(props: any) {
    return <div>
        {JSON.stringify(props)}
    </div>
}