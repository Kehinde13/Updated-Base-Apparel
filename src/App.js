import logo from './images/logo.svg'
import heroDesktop from './images/hero-desktop.jpg'
import heroMobile from './images/hero-mobile.jpg'
import iconArrow from './images/icon-arrow.svg'
import iconError from './images/icon-error.svg'
import bgImage from './images/bg-pattern-desktop.svg'
import { useForm } from 'react-hook-form'


function App() {

  const {register, formState: {errors}, handleSubmit} = useForm();

  return (
    <div className="container mx-auto">
        <div className='md:flex md:mt-10'>
          <div className='hidden md:block absolute w-[755px] '>
              <img src={bgImage} className='w-full h-[510px]'/>
          </div>
          <header className='py-3 px-5 md:absolute left-20'>
             <img src={logo} alt='logo' className='md:w-[200px]'/>
          </header>
          <div className='md:flex flex-row-reverse'>
             <picture className='hero md:ml-48'>
                <source media='(min-width:769px)'
                  srcSet={heroDesktop}
                />
                 <img src={heroMobile} alt='hero'/>    
              </picture>
              <div className='mt-10 text-center md:text-left md:mt-28 md:ml-16 z-10'>
                <div className='text-5xl tracking-widest'>
                  <h1 className='were'>WE'RE</h1>
                  <h1 className='font-semibold'>COMING</h1>
                  <h1 className='font-semibold'>SOON</h1>
                </div>
               
                <p className='my-10 md:w-[500px] '>
                  Hello fellow shoppers! We're currently building our new fashion store. 
                  Add your email below to stay up-to-date with announcements and our launch deals.
                </p>
                <form
                 className='relative mt-10 md:mt-16' action="" method="post">
                  <input 
                      className='p-2 w-[300px] md:w-[450px] rounded-full input border'
                      type="email" placeholder="Email Address" required 
                      {...register("email", {
                        required: true, 
                        pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                      })}
                   />
                 
                  <button  
                    onClick={handleSubmit()}
                    className='py-3 px-8 rounded-full absolute right-9 shadow-2xl'>
                    <img src={iconArrow} alt="arrow" />
                  </button>

                  {errors.email?.type === "pattern" &&
                   <img src={iconError} alt='error' 
                    className='absolute bottom-10 right-28' /> 
                   }

                  <div className='font-light md:ml-5 mt-3 text-sm text-red-600'>
                       {errors.email?.type === "pattern" && "Please provide a valid Email"}
                  </div>
                </form>
                
              </div>
          </div>
        </div>
    </div>
  );
}

export default App;
