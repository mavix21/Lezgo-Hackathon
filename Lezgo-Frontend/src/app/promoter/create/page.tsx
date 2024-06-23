import { FontCarousel } from "@/components/ui/FontCarousel/FontCarousel";
import { CreateEvent } from "@/components/ui/CreateEventButton";
import { Input } from "@/components/ui/input";

export default function Create() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200">
      <FontCarousel
        text="Crear un evento"
        times={8}
        direction="left"
        reference="../../promoter"></FontCarousel>
      <main className="container mx-auto p-8">
        {/* <h1 className="text-5xl font-bold text-center mb-8">Create an event Create an event Create an event</h1> */}
        <div className="grid grid-cols-4 gap-4 align">
          <div className="col-span-1 space-y-4 mt-10">
            <Input placeholder="Nombre del evento"></Input>
            <button className="w-full py-4 bg-green-500 text-black font-bold rounded h-24">
              GENERAL
            </button>
            <button className="w-full py-4 bg-green-500 text-black font-bold rounded h-24">
              VIP
            </button>
            <button className="w-full py-4 bg-green-500 text-black font-bold rounded h-24">
              SUPER VIP
            </button>
          </div>
          <div className="col-span-2 grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <div className="bg-blue-500 text-white text-center py-2 rounded-t">
                PREVENTA
              </div>
              <div className="bg-gray-200 text-center py-2 rounded-b">
                Julio 5, 2024 - 20hrs
              </div>
              <div className="bg-white text-center py-4 rounded mt-2">
                S/. 99
              </div>
              <div className="bg-gray-300 text-center py-2 rounded mt-2">
                Cantidad: 200
              </div>
              <div className="bg-white text-center py-4 rounded mt-2">
                S/. 200
              </div>
              <div className="bg-gray-300 text-center py-2 rounded mt-2">
                Cantidad: 50
              </div>
              <div className="bg-white text-center py-4 rounded mt-2">
                S/. 400
              </div>
              <div className="bg-gray-300 text-center py-2 rounded mt-2">
                Cantidad: 50
              </div>
            </div>
            <div className="col-span-1">
              <div className="bg-blue-500 text-white text-center py-2 rounded-t">
                SECTOR 1
              </div>
              <div className="bg-gray-200 text-center py-2 rounded-b">
                Julio 12, 2024 - 20hrs
              </div>
              <div className="bg-white text-center py-4 rounded mt-2">
                S/. 120
              </div>
              <div className="bg-gray-300 text-center py-2 rounded mt-2">
                Cantidad: 200
              </div>
              <div className="bg-white text-center py-4 rounded mt-2">
                S/. 250
              </div>
              <div className="bg-gray-300 text-center py-2 rounded mt-2">
                Cantidad: 20
              </div>
              <div className="bg-white text-center py-4 rounded mt-2">
                S/. 500
              </div>
              <div className="bg-gray-300 text-center py-2 rounded mt-2">
                Cantidad: 50
              </div>
            </div>
            <div className="col-span-1">
              <div className="bg-blue-500 text-white text-center py-2 rounded-t">
                PRECIO REGULAR
              </div>
              <div className="bg-gray-200 text-center py-2 rounded-b">
                Julio 21, 2024 - 20hrs
              </div>
              <div className="bg-white text-center py-4 rounded mt-2">
                S/. 150
              </div>
              <div className="bg-gray-300 text-center py-2 rounded mt-2">
                Cantidad: 100
              </div>
              <div className="bg-white text-center py-4 rounded mt-2">
                S/. 350
              </div>
              <div className="bg-gray-300 text-center py-2 rounded mt-2">
                Cantidad: 10
              </div>
              <div className="bg-white text-center py-4 rounded mt-2">
                S/. 600
              </div>
              <div className="bg-gray-300 text-center py-2 rounded mt-2">
                Cantidad: 50
              </div>
            </div>
          </div>
          <div className="col-span-1 space-y-4">
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-center font-bold">Entradas por zona</h2>
              <p className="text-center">General: 500</p>
              <p className="text-center">VIP: 80</p>
              <p className="text-center">Super Vip: 150</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-center font-bold">Total de Tickets</h2>
              <p className="text-center text-2xl">730</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-center font-bold">Ganancia total</h2>
              <p className="text-center text-2xl">S/. 3 142 134</p>
            </div>
            <div className="pt-6 flex items-center justify-center">
              <CreateEvent className="w-64">Crear</CreateEvent>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
