'use client';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import './App.css';

function App() {
  return (
    <div className="bg-[#F8F8F8] h-[100vh] flex">
      <div className='container m-auto h-[93vh] items-center bg-[#FFFFFF] rounded-md shadow-md'>
          <div className='lg:grid grid-cols-2 gap-5 items-center'>
          <div>
              <div className='text-center'>
                <h1 className='text-black text-[32px] font-bold'>
                  Masuk
                </h1>
                <p className='text-[#707070]'>Masuk username dan password Anda</p>
              </div>
              <div className='px-20 lg:px-[200px]'>
              <form className="flex max-w-md flex-col gap-4">
                  <div className='items-center'>
                    <div className="mb-2 block">
                      <Label
                        htmlFor="email1"
                        value="Email"
                      />
                    </div>
                    <TextInput
                      id="email1"
                      placeholder="Example"
                      required
                      type="email"
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label
                        htmlFor="password1"
                        value="Password"
                      />
                    </div>
                    <TextInput
                      id="password1"
                      required
                      type="password"
                    />
                  </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="remember" />
                      <Label htmlFor="remember">
                        Remember me
                      </Label>
                    </div>
                    <Button type="submit">
                      Submit
                    </Button>
                  </form>
                </div>
            </div>
            <div className='lg:grid h-[80 vh] '>
              <div className='bg-[#219EBC] rounded-sw text-center items-center'>
              <img className='w-full rounded-md' src={process.env.PUBLIC_URL + '/Login.png'} alt="show info"/>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
