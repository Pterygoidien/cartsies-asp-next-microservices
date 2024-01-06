import EmptyFilter from "@/app/components/EmptyFilter";

export default function Page({ searchParams }: { searchParams: { callbackUrl: string } }): JSX.Element {
    return (
        <EmptyFilter
            title="You need to be logged in to see this page"
            subtitle="Please login to continue"
            showLogin={true}
            callbackUrl={searchParams.callbackUrl}
        />
    );
}