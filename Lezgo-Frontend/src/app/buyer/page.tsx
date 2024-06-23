'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Buy() {
    return (
        <main className="min-h-screen bg-gray-100 flex justify-center">
            <div className="max-w-6xl w-full flex space-x-8">
                <div className="flex-1">
                    <Image
                        src="/images/portada.png"
                        width={650}
                        height={450}
                        alt="Picture of the author"
                    />
                </div>
                <div className="w-96 bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold">Crystal Castles</h2>
                    <p className="text-gray-600">Femen & Fleece Tour 2024</p>
                    <h3 className="mt-6 text-lg font-semibold">Compra tus tickets</h3>
                    <div className="mt-4">
                        <div className="flex items-center justify-between py-2">
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="ticket" value="general" className="form-radio text-green-500" />
                                <span>General</span>
                            </label>
                            <span>S/. 120</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="ticket" value="vip" className="form-radio text-green-500" />
                                <span>VIP</span>
                            </label>
                            <span>S/. 250</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="ticket" value="super-vip" className="form-radio text-green-500" />
                                <span>Super VIP</span>
                            </label>
                            <span>S/. 500</span>
                        </div>
                    </div>
                    <div className="flex items-center mt-6">
                        <div className="flex items-center space-x-2">
                            <button className="p-2 bg-gray-200 rounded-full">-</button>
                            <span>1</span>
                            <button className="p-2 bg-gray-200 rounded-full">+</button>
                        </div>
                        <Button className="ml-auto bg-green-500 text-white">Comprar</Button>
                    </div>
                    <p className="mt-4 text-sm text-gray-600">
                        Apto para menores de 18 años acompañados de un adulto. Compartiremos los datos con el organizador del evento.
                    </p>
                </div>
            </div>
        </main >
    )
}