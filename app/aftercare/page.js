import Image from &apos;next/image&apos;;

export default function Aftercare() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero__container">
          <h2 className="hero__heading">Tattoo Collective</h2>
          <span className="hero__sub-heading">Finksburg, Maryland</span>
        </div>
        <div className="hero__background">
          <Image className="hero__image" src="/shop.jpg" alt="" width="1440" height="810" />
        </div>
      </section>

      <section className="l-section">
        <div className="l-section__container">
          <h2 className="l-section__heading">Aftercare Instructions</h2>
          <div class="wysiwyg">
            <p><em>Proper tattoo care is not difficult, but it is necessary.</em></p>

            <h3>Keep the Tattoo Covered</h3>
            <p>For the first few hours (3 hours minimum) wear the bandage initially put on your tattoo.</p>
            <p>If your artist used a Saniderm bandage, leave it on for 3 to 4 days before removing it. To remove the Saniderm it is easiest to remove under warm (not hot) running water. Pull up on one corner and use one finger to move it in a windshield wiper motion under the bandage as you pull up on it.</p>
            <p>If your artist did not use a Saniderm bandage remove the original bandage after you get home, remove the original bandage then gently wash your tattoo.</p>
            <p>Remember, it&apos;s normal to see fluid oozing from the bandage or fresh tattoo—this is just blood plasma and excess ink. Your skin may also be red, sore, and slightly warm to the touch. These are all typical and healthy reactions.</p>

            <h3>Wash Your Tattoo</h3>
            <p>After removing the bandages, wash the area with fragrance-free, antibacterial soap and lukewarm water. Gently pat it dry—do not scrub or rub the skin. Handle your tattoo with care, much like you would a cut or scrape.</p>
            <p>Avoid using a washcloth to dry your tattoo. Instead, gently pat the area with a clean paper towel. If you notice a bit of ink running into the sink while washing, don&apos;t worry—it&apos;s just excess ink from your skin.</p>

            <h3>Moisturize</h3>
            <p>After cleaning your tattoo, keep the area moist to prevent cracking, drying, and bleeding. Use a moisture-sealing product (ex: aquaphore, coconut oil, aloe vera gel, and specialized tattoo aftercare salve or balm) 2 to 3 times daily until the scabs have fully healed. For the first 5-7 days or until your tattoo starts to flake/peel like a sunburn.</p>
            <p>Once peeling starts, switch to a regular fragrance-free lotion (ex: Lubriderm, Curel, CeraVe&apos;s unscented Daily Moisturizing Lotion) for an additional two weeks. Avoid lotions or creams with harsh perfumes and chemicals, as they can harm the skin and affect healing.</p>
            <p>When your tattoo is clean and hydrated, do not re-bandage it, as this can keep the area too wet and increase the risk of infection.</p>

            <h3>Do Not Expose Your Skin to the Sun</h3>
            <p>Avoid direct sunlight on your tattoo for at least 2 weeks. If you need to be outside for extended periods, wear clothing that covers the new tattoo. Once your tattoo is completely healed, regularly apply sunblock to protect it from the sun&apos;s rays.</p>

            <h3>Avoid Strenuous Activity or Workouts</h3>
            <p>You should wait at least 24-48 hours before engaging in strenuous physical activity. After working out, shower as soon as possible and follow your cleaning and moisturizing routine to prevent any problems.</p>

            <h3>No Tight Clothing</h3>
            <p>Tight clothing can rub against your skin, cause chafing, pull off scabs, or stick to lotion or gels, leading to more pain or discomfort. Scabs are crucial for healing, so it&apos;s important to wear breathable clothing that helps keep them intact. As your tattoo heals, opt for loose-fitting clothes made from lightweight, breathable fabrics to support proper healing. Avoid dirty, sweaty, or itchy clothing, as they can cause complications in the healing process.</p>

            <h3>Leave Your Scabs Alone</h3>
            <p>Just as with other wounds, picking at or prematurely removing a scab can pull out the ink and leave a scar. When your tattoo starts to dry out, resist the urge to scratch it. Instead, apply moisturizer and distract yourself. As long as you don&apos;t pick at the scabs, your tattoo will heal beautifully</p>

            <h3>Don&apos;t Go Swimming</h3> 
            <p>Showering is fine, but avoid soaking your tattoo for at least 2 weeks. This means no swimming, baths, or submerging your tattoo in water for extended periods. Soaking can damage your tattoo and increase the risk of infection from bacteria in the water.</p>

            <h3>Don&apos;t Shave After Your Tattoo</h3>
            <p>Using a razor or blade on a new tattoo can cause significant damage, such as cutting the skin, peeling away scabs, or disrupting the fresh ink. Avoid shaving the area until it is fully healed.</p>

            <h3>What Are the Signs of an Infected Tattoo?</h3>
            <p>Minor swelling and discomfort are normal after getting a tattoo. However, if symptoms worsen or persist for a long time, it could be a concern.</p>
            <p>Watch for these symptoms:</p>
            <ul>
              <li>Rash or hot, raised skin around the tattoo</li>
              <li>Swelling (some swelling is normal, but if it worsens or isn&apos;t relieved by ice, consult a doctor)</li>
              <li>Fever</li>
              <li>Increased pain (some pain is normal, but worsening pain could indicate an infection)</li>
              <li>Chills and sweats</li>
              <li>Pus or discharge from the wound</li>
              <li>If you suspect an infection, see a doctor immediately.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}