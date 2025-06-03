import React from 'react'
import footerlogo from '../../assets/logo_arcabit_stopka.png'

const Footer = () => {
  return (
    <>

    <div className='bg-[#000000] space-y-10'>
      {/* 1 */}
        <div className='flex justify-between mx-24 pt-24'>
            <div className='space-y-5'>
                <div className=''>
                    <p className='text-[#777777] haha2 font-semibold tracking-widest'>PRODUCTS</p>
                </div>
                <div className='space-y-3'>
                  <p className='text-[#CCCCCC] haha font-[700]'>Home Security</p>
                  <p className='text-[#CCCCCC] haha font-[700]'>Internet Security</p>
                  <p className='text-[#CCCCCC] haha font-[700]'>Endpoint Security</p>
                  <p className='text-[#CCCCCC] haha font-[700]'>Bezpieczna Szkoła</p>
                  <p className='text-[#CCCCCC] haha font-[700]'>Ochrona Serwera</p>
                  <p className='text-[#CCCCCC] haha font-[700]'>Wersje OEM</p>
                  <p className='text-[#CCCCCC] haha font-[700]'>Android Antivirus</p>
                </div>
            </div>
            <div className='space-y-5'>
                <div className=''>
                    <p className='text-[#777777] haha2 font-semibold tracking-widest'>MENU</p>
                </div>
                <div className='space-y-3'>
                  <p className='text-[#CCCCCC] haha font-[700]'>Wsparcie</p>
                  <p className='text-[#CCCCCC] haha font-[700]'>Kontakt</p>
                  <p className='text-[#CCCCCC] haha font-[700]'>Kariera</p>
                  <p className='text-[#CCCCCC] haha font-[700]'>Blog</p>
                  <p className='text-[#CCCCCC] haha font-[700]'>Partnerzy</p>
                  <p className='text-[#CCCCCC] haha font-[700]'>Porównanie produktów</p>
                  <p className='text-[#CCCCCC] haha font-[700]'>Polityka prywatności</p>
                </div>
            </div>
            <div className='space-y-5'>

              <div className=''>
                    <p className='text-[#777777] haha2 font-semibold tracking-widest'>KONTAKT</p>
                </div>

                <div className='space-y-3'>
                  <p className='font-[400] text-[#CCCCCC] haha'>Arcabit Sp. z o.o.</p>
                  <p className='font-[400] text-[#CCCCCC] haha'>05-082 Blizne Łaszczyńskiego,</p>
                  <p className='font-[400] text-[#CCCCCC] haha'>ul. Graniczna 50 (Warszawa/Bemowo)</p>
                </div>
                <div className='space-y-3'>
                   <p className='font-[400] text-[#CCCCCC] haha'>tel. (22) 532 69 00</p>
                  <p className='font-[400] text-[#CCCCCC] haha'>fax (22) 201 21 82</p>
                  
                </div>

            </div>
            <div>

              <img src={footerlogo} alt="" />

            </div>
        </div>

        {/* 2 */}

        <div className='border-[0.5px] border-[#262626]'>
          
        </div>

        {/* 3 */}
        <div className='mx-24 pb-6'>

          <p className=' haha text-[14px] font-[400] text-[#777777]'>© 2025 Arcabit.</p>
        </div>
    </div>
    </>
  )
}

export default Footer