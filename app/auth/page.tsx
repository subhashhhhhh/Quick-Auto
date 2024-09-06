'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Car } from "lucide-react"

// Dummy user credentials
const dummyUsers = [
  { email: 'student1@thapar.edu', password: 'password123' },
  { email: 'student2@thapar.edu', password: 'thapar2023' },
  { email: 'professor@thapar.edu', password: 'faculty2023' },
]

export default function AuthPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email.endsWith('@thapar.edu')) {
      setError('Please use a @thapar.edu email address')
      return
    }

    const user = dummyUsers.find(u => u.email === email && u.password === password)

    if (user) {
      // Successful login
      router.push('/booking')
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <div className="flex items-center justify-center">
          <Car className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">Quick Auto</span>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <Tabs defaultValue="signin" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  placeholder="you@thapar.edu" 
                  required 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  required 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button className="w-full" type="submit">Sign In</Button>
            </form>
          </TabsContent>
          <TabsContent value="signup">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="new-email">Email</Label>
                <Input 
                  id="new-email" 
                  placeholder="you@thapar.edu" 
                  required 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">Password</Label>
                <Input 
                  id="new-password" 
                  required 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button className="w-full" type="submit">Sign Up</Button>
            </form>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}