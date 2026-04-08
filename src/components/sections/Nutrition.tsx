
export function Nutrition() {
  return (
    <section id="nutrition" className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-md mx-auto bg-white text-black p-8 shadow-2xl rounded-sm">
        <h2 className="font-bold text-4xl border-b-[12px] border-black pb-1 mb-1">Nutrition Facts</h2>
        <p className="text-sm font-bold border-b-4 border-black mb-1">Serving Size 1 Bowl (350g)</p>
        <div className="flex justify-between items-end border-b-8 border-black mb-1">
          <div className="font-bold leading-none">
            <span className="text-sm">Amount Per Serving</span>
            <p className="text-3xl">Calories</p>
          </div>
          <p className="text-4xl font-bold">540</p>
        </div>
        
        <div className="text-right text-xs font-bold border-b border-black py-1">% Daily Value*</div>
        
        <div className="border-b border-black py-1 flex justify-between">
          <span className="font-bold">Total Fat <span className="font-normal">32g</span></span>
          <span className="font-bold">41%</span>
        </div>
        <div className="border-b border-black py-1 pl-4 flex justify-between">
          <span>Saturated Fat 12g</span>
          <span className="font-bold">60%</span>
        </div>
        <div className="border-b border-black py-1 flex justify-between">
          <span className="font-bold">Cholesterol <span className="font-normal">85mg</span></span>
          <span className="font-bold">28%</span>
        </div>
        <div className="border-b border-black py-1 flex justify-between">
          <span className="font-bold">Sodium <span className="font-normal">920mg</span></span>
          <span className="font-bold">40%</span>
        </div>
        <div className="border-b border-black py-1 flex justify-between">
          <span className="font-bold">Total Carbohydrate <span className="font-normal">18g</span></span>
          <span className="font-bold">7%</span>
        </div>
        <div className="border-b-[8px] border-black py-1 flex justify-between">
          <span className="font-bold">Protein <span className="font-normal">45g</span></span>
          <span className="font-bold">90%</span>
        </div>
        
        <p className="text-[10px] leading-tight mt-2 italic font-body">
          * The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
        </p>
      </div>
      <p className="text-center text-muted-foreground mt-8 text-xs uppercase tracking-widest italic">Authentically healthy, Unapologetically rich</p>
    </section>
  );
}
