export default function UserLayout({children}: {children: React.ReactNode}) {
    return (
        <section>
            User Layout Header
            {children}
            User Layout Footer
        </section>
    );
}