import "@/styles/globals.scss";

export const metadata = {
    title: "Personal Portfolio",
    descriptuion: "My Personal Portfolio",
};


const RootLayout = ({ children }: { children: React.ReactNode; }) => (
    <html lang="en">
        <body>
            {children}
        </body>
    </html>
);

export default RootLayout;
