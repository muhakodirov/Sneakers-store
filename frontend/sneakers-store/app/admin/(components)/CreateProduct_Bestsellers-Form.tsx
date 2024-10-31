'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { addProduct } from '@/action/bestsellers/get-products'

interface FormData {
    name: string;
    price: string;
    category: string;
    description: string;
    imageUrl: string
}

export default function FormBestsellers() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        price: '',
        category: '',
        description: '',
        imageUrl: '/image.webp'
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }))
    }



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await addProduct(formData)
        setFormData(prev => ({
            ...prev,
            name: '',
            price: '',
            category: '',
            description: '',
            imageUrl: '/image.webp'
        }))
    }


    return (
        <div className="mx-auto  ">
            <h1 className='text-center text-lg mb-5 font-bold '> Bestsellers Produkte</h1>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 border space-y-6">
                <div className=''>
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-[90%] mt-1"
                        required
                    />
                </div>


                <div>
                    <Label htmlFor="price">Price</Label>
                    <Input
                        id="price"
                        name="price"
                        type="number"
                        value={formData.price}
                        onChange={handleInputChange}
                        className="w-[90%] mt-1"
                        required
                    />
                </div>

                <div>
                    <Label htmlFor="imageUrl">Image Link</Label>
                    <Input
                        id="imageUrl"
                        name="imageUrl"
                        type="text"
                        value={formData.imageUrl}
                        onChange={handleInputChange}
                        className="w-[90%] mt-1"
                        placeholder='Not requiered'

                    />
                </div>

                <div>
                    <Label htmlFor="category">Category</Label>
                    <Select
                        value={formData.category}
                        onValueChange={(value: string) => setFormData(prev => ({ ...prev, category: value }))}
                    >
                        <SelectTrigger className="w-[90%] mt-1">
                            <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="nike">Nike</SelectItem>
                            <SelectItem value="adidas">Adidas</SelectItem>
                            <SelectItem value="new-balance">New Balance</SelectItem>
                            <SelectItem value="puma">Puma</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="w-[90%] mt-1"
                        rows={4}
                    />
                </div>


                <Button type="submit" className="w-52  p-2 rounded-lg">Create Product</Button>
            </form>
        </div>
    )
}