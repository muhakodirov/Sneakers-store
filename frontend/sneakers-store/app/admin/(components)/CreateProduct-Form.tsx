'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { addProduct } from '@/action/admin/addProduct'

interface FormData {
    name: string;
    size: string[];
    price: string;
    men: boolean;
    women: boolean;
    stock: string;
    category: string;
    description: string;
    sale: boolean;
    imageUrl: string
}

export default function Form() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        size: [],
        price: '',
        men: false,
        women: false,
        stock: '',
        category: '',
        description: '',
        sale: false,
        imageUrl: '/image.webp'
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }))
    }

    const handleSizeChange = (size: string) => {
        setFormData(prev => ({
            ...prev,
            size: prev.size.includes(size)
                ? prev.size.filter(s => s !== size)
                : [...prev.size, size]
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await addProduct(formData)


        setFormData(prev => ({
            ...prev,
            name: '',
            size: [],
            price: '',
            men: false,
            women: false,
            stock: '',
            category: '',
            description: '',
            sale: false,
            imageUrl: '/image.webp'
        }))
    }

    const sizeOptions: number[] = Array.from({ length: 8 }, (_, i) => i + 38)

    return (
        <div className='mx-auto'>
            <h1 className='text-center text-lg mb-5 font-bold '> Produkte (Herren/Damen/Sale) </h1>

            <form onSubmit={handleSubmit} className="space-y-5 p-6 bg-white border rounded-lg">
                <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1"
                        required
                    />
                </div>

                <div>
                    <Label>Size</Label>
                    <div className="grid grid-cols-5 gap-2 mt-1">
                        {sizeOptions.map((size) => (
                            <Button
                                key={size}
                                type="button"
                                variant={formData.size.includes(size.toString()) ? "default" : "outline"}
                                onClick={() => handleSizeChange(size.toString())}
                                className=""
                            >
                                {size}
                            </Button>
                        ))}
                    </div>
                </div>

                <div>
                    <Label htmlFor="price">Price</Label>
                    <Input
                        id="price"
                        name="price"
                        type="number"
                        value={formData.price}
                        onChange={handleInputChange}
                        className="mt-1"
                        required
                    />
                </div>

                <div className="flex space-x-4">
                    <div className="flex items-center">
                        <Checkbox
                            id="men"
                            name="men"
                            checked={formData.men}
                            onCheckedChange={(checked: boolean) => setFormData(prev => ({ ...prev, men: checked }))}
                        />
                        <Label htmlFor="men" className="ml-2">Men</Label>
                    </div>
                    <div className="flex items-center">
                        <Checkbox
                            id="women"
                            name="women"
                            checked={formData.women}
                            onCheckedChange={(checked: boolean) => setFormData(prev => ({ ...prev, women: checked }))}
                        />
                        <Label htmlFor="women" className="ml-2">Women</Label>
                    </div>
                </div>

                <div>
                    <Label htmlFor="stock">Stock</Label>
                    <Input
                        id="stock"
                        name="stock"
                        type="number"
                        value={formData.stock}
                        onChange={handleInputChange}
                        className="mt-1"
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
                        className="mt-1"
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

                <div className="flex items-center">
                    <Checkbox
                        id="sale"
                        name="sale"
                        checked={formData.sale}
                        onCheckedChange={(checked: boolean) => setFormData(prev => ({ ...prev, sale: checked }))}
                    />
                    <Label htmlFor="sale" className="ml-2">On Sale</Label>
                </div>

                <Button type="submit" className="w-52 p-2 rounded-lg">Erstellen</Button>
            </form>
        </div>
    )
}