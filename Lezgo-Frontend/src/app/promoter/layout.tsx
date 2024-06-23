import { App } from "../shared/conf"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <header className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200">
                    <nav className="flex items-center space-x-8">
                        <a href="#" className="text-lg font-semibold">
                            Nosotros
                        </a>
                        <a href="#" className="text-lg font-semibold">
                            Tickets
                        </a>
                        <a href="#" className="text-lg font-semibold">
                            Solución
                        </a>
                    </nav>
                    <div className="flex flex-row">
                        <p className="mt-4 font-semibold">Hola, </p>
                        <div className="bg-green-500 text-white px-4 py-2 rounded-lg">
                            <App />
                        </div>

                    </div>
                </header>
                <div>{children}</div>
            </body>
        </html>
    )
}