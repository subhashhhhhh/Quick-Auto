'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Car } from "lucide-react"

export default function BookingPage() {
  const [source, setSource] = useState('')
  const [destination, setDestination] = useState('')

  const handleBooking = () => {
    // Here you would typically handle the booking logic
    alert(`Booking from ${source} to ${destination}`)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <div className="flex items-center justify-center">
          <Car className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">Riderrr</span>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter text-center">Book Your Ride</h2>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="source">Source</Label>
              <Select onValueChange={setSource}>
                <SelectTrigger>
                  <SelectValue placeholder="Select source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hostel-j">Hostel J</SelectItem>
                  <SelectItem value="hostel-k">Hostel K</SelectItem>
                  <SelectItem value="library">Library</SelectItem>
                  <SelectItem value="main-gate">Main Gate</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="destination">Destination</Label>
              <Select onValueChange={setDestination}>
                <SelectTrigger>
                  <SelectValue placeholder="Select destination" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hostel-j">Hostel J</SelectItem>
                  <SelectItem value="hostel-k">Hostel K</SelectItem>
                  <SelectItem value="library">Library</SelectItem>
                  <SelectItem value="main-gate">Main Gate</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full" onClick={handleBooking}>Book Now</Button>
          </form>
        </div>
      </main>
    </div>
  )
}