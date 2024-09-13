<template>
  <!-- Start Work -->
  <section
    class="relative pt-36 md:py-36 bg-gradient-to-t from-purple/[10%] to-white dark:bg-gradient-to-b dark:from-transparent dark:via-purple/[18%] dark:to-transparent"
    id="projects">
    <div class="container">
      <div class="grid grid-cols-1" data-aos="fade-up">
        <div class="text-center">
          <div class="inline-block mb-6">
            <BaseTitle text1="Selected" text2=" Projects" :isInverted="true" maxWidth="280px" />
          </div>
          <h2 class="font-semibold text-[26px]/normal mt-7">Showcasing My Projects</h2>
          <p class="mt-5 text-gray max-w-[708px] mx-auto">Crafting digital, graphic, and dimensional thinking, to create
            category-leading brand experiences that have meaning.</p>
        </div>
      </div>
      <div class="grid grid-cols-1 mt-14 gap-24">

        <BaseProjectSection title="Ludmer Engineering - Quebec" 
          description="Where contractors go for efficient design"
          text="Ludmer engineering is a fledgling firm, borne of the necessity to provide efficient design tailored to the needs of builders and contractors" 
          imageUrl="/images/ludmer.webp" 
          projectLink="https://www.ludmer-engineering.ca/"
          textColor="#4588cb" 
          hoverColor="#4588cb" 
          :isReversed="false" 
          />

        <BaseProjectSection title="Duchesnay - Canada"
          description="Duchesnay’s commitment to women’s health - from pregnancy and breastfeeding to menopause"
          text="Duchesnay is a specialty pharmaceutical company with a long-standing commitment to women’s health"
          imageUrl="/images/duchesnay.webp" 
          projectLink="https://duchesnay.com/en" 
          textColor="#85084b"
          hoverColor="#72043f" 
          :isReversed="false" 
          />

        <BaseProjectSection title="Analog Pharma - Canada" 
          description="Providing patients with orphan diseases continuous access to high-quality generic medications" 
          text="Providing Canadians with access to high quality orphan drugs and generic medications" 
          imageUrl="/images/analog.webp"
          projectLink="https://analogpharma.ca/en" 
          textColor="#079779" 
          hoverColor="#079779" 
          :isReversed="false" 
          />

        <BaseProjectSection title="Sefon Surfboards - Peru" 
          description="Proud to collaborate with one of Peru's top Surfboard shapers"
          text="With over 30 years of shaping and surfing experience, the goal was to capture the essence of his style and unique approach to surfboard design." 
          imageUrl="/images/sefon.webp"
          projectLink="https://sefon-surfboards.vercel.app/"
          textColor="#198da4" 
          hoverColor="#198da4" 
          :isReversed="false" 
          :inDevelopment="true" 
          />

      </div>
    </div>
  </section>
</template>
