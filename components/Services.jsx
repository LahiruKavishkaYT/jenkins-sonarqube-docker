import { GanttChartSquare, Blocks, Gamepad2 } from "lucide-react";
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
 } from "./ui/card";

 const ServicesData = [
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: 'Web Design',
    description: 'Empowering Your Business with Cutting-Edge Designs.',
  },
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: 'Web Development',
    description: 'Your Business, Our Online Expertise.',
  },
  {
    icon: <Gamepad2 size={72} strokeWidth={0.8} />,
    title: 'Game Coaching',
    description: 'We will coach you to be Better!',
  },
 ];

const Services = () => {
  return (
    <section className='mb-12 xl:mb-36'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
          My Services
        </h2>
        
        { /* grid items */}
        <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 
        xl:gap-x-8'>
          {ServicesData.map((item, index)=> {
            return (
            <Card className='w-full max-w-[424px] h-[300px] flex-col pt-16 pb-10 
            justify-center items-center relative' 
            key={index}
            >
              <CardHeader className='text-primary absolute -top-[60px]'>
                <div className='w-[140px] h-[80px] bg-white dark:bg-background 
                flex justify-center items-center'>
                  {item.icon}
                </div>
              </CardHeader>
              <CardContent className='text-center '>
              <CardTitle className='mb-4'>{item.title}</CardTitle>
                <CardDescription className='text-lg'>
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
            );
          })} 
        </div>
      </div>
      
    </section>
  )
}

export default Services;
