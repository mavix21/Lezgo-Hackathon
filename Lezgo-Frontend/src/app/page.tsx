'use client'

import { useRouter } from "next/navigation";
import { useState } from 'react';
import Image from 'next/image';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";


export default function Home() {
  const [loading_P, setLoading_P] = useState(false);
  const [loading_B, setLoading_B] = useState(false);
  const router = useRouter();

  const handleClick_Buyer = () => {
    setLoading_B(true);
    router.push('/buyer');
  };

  const handleClick_Promoter = () => {
    setLoading_P(true);
    router.push('/promoter');
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200">

        {/* <div className="text-4xl font-bold">LEZGO</div> */}
        <Image
          src="/images/brand.png"
          width={100}
          height={100}
          alt="Picture of the author"
        />
        <div className="flex items-center space-x-4">
          <Button
            className="text-lg border-slate-300 group"
            variant="outline"
            onClick={handleClick_Promoter}
            disabled={loading_P} // Deshabilitar el botón mientras carga
          >
            {loading_P ? (
              <div className="flex items-center">
                <svg
                  className="animate-spin h-5 w-5 mr-3 ..."
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  ></path>
                </svg>
              </div>
            ) : (
              <>
                Promotor
              </>
            )}
          </Button>
          {/* <Button className="bg-green-500 text-white">Inicia sesión</Button> */}

          <Button
            className="text-lg border-slate-300 bg-green-400 text-black group"
            variant="outline"
            onClick={handleClick_Buyer}
            disabled={loading_B} // Deshabilitar el botón mientras carga
          >
            {loading_B ? (
              <div className="flex items-center ">
                <svg
                  className="animate-spin h-5 w-5 mr-3 ..."
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  ></path>
                </svg>
              </div>
            ) : (
              <>
                Comprar
              </>
            )}
          </Button>

        </div>
      </header>
      <main className="p-8">
        <div className="flex flex-col items-center space-y-8">
          <div className="relative">
            <Image
              src="/images/portada.png"
              width={450}
              height={450}
              alt="Picture of the author"
            />
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-black opacity-75">
              Crystal Castles
            </h1>
          </div>
          <div className="max-w-2xl text-center">
            <p className="text-lg">
              Crystal Castles es una banda electrónica experimental de Toronto, Canadá, que se formó en 2003. La banda es conocida por su música ruidosa y emotiva que algunos han llamado "dance punk".
              <a href="#" className="text-blue-500">
                {" "}
                Ver más..
              </a>
            </p>
            <Button className="mt-4 bg-green-500 text-white">¡Obtén tus entradas!</Button>
          </div>
        </div>
        <section className="mt-16">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Eventos recomendados</h2>
            <a href="#" className="text-blue-500">
              Ver todo
            </a>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-4">
            <Card className="w-full">
              <Image
                src="/images/card1.png"
                width={450}
                height={450}
                alt="Picture of the author"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">John Digweed @ Arena 1</h3>
                <p className="text-sm text-gray-600">Julio 13 - 22:00 hrs</p>
              </div>
            </Card>
            <Card className="w-full">
              <Image
                src="/images/card2.png"
                width={450}
                height={450}
                alt="Picture of the author"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">James Zabiela @ Lima Polo Club</h3>
                <p className="text-sm text-gray-600">Julio 20 - 22:00 hrs</p>
              </div>
            </Card>
            <Card className="w-full">
              <Image
                src="/images/card3.png"
                width={450}
                height={450}
                alt="Picture of the author"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">Brutalismus3000 @ Green Arena</h3>
                <p className="text-sm text-gray-600">Julio 29 - 22:00 hrs</p>
              </div>
            </Card>
            <Card className="w-full">
              <Image
                src="/images/card4.png"
                width={450}
                height={450}
                alt="Picture of the author"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">Solomun @ Lima Polo Club</h3>
                <p className="text-sm text-gray-600">Septiembre 14 - 22:00 hrs</p>
              </div>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
