const AboutHero = () => {
  return (
    <section className="flex items-center justify-center">
      <div className='flex flex-col items-center justify-center text-center w-full my-32'>
        <h1 className='font-title text-4xl mb-8 font-bold'>About Us</h1>
        <p className='font-secondary text-gray-500 w-2/3 mb-8'>
          TravelBugs is an innovative platform dedicated to transforming how
          explorers interact with local communities and businesses. Our
          application connects adventurers to personalized quests while offering
          local establishments a unique way to attract and engage customers. At
          TravelBugs, we're creating a world where exploration and community
          support go hand in hand, one quest at a time.
        </p>
        <img src="/public/backgrounds/cave.jpg" alt="Cave" className="w-[900px] max-h-80 object-cover rounded-lg"/>
      </div>
    </section>
  )
}

export default AboutHero;
