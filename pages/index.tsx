import Card from '../components/common/Card'
import Button from '../components/common/Button'
import { DEFAULT_PROPERTY_IMAGE } from '../constants'

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">ALX Listing App</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card 
          title="Modern Apartment" 
          description="Beautiful apartment in the city center"
          imageUrl={DEFAULT_PROPERTY_IMAGE}
        />
      </div>
      <div className="mt-4">
        <Button 
          text="Book Now" 
          onClick={() => alert('Booking initiated!')} 
          variant="primary"
        />
      </div>
    </div>
  )
}
