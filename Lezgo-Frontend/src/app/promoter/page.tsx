"use client"

import { FontCarousel } from "@/components/ui/FontCarousel/FontCarousel"
import { useEffect } from "react"

export default function Component() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200">
            <main className="space-y-16 pt-20">
                <FontCarousel text="Crear un evento" times={8} direction="left" reference="./promoter/create"></FontCarousel>
                <FontCarousel text="Gestión de eventos" times={8} direction="right" reference="./promoter/manage"></FontCarousel>
                <FontCarousel text="Manejo de información" times={6} direction="left" reference="./promoter/insights"></FontCarousel>
            </main>
        </div>
    )
}