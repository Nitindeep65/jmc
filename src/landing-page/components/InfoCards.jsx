import WhosWho from './WhosWho'
import BulletinBoard from './BulletinBoard'
import MinistersCarousel from './MinistersCarousel'

export default function InfoCards() {
  return (
    <section className="py-8 bg-[#f5f5f5]">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          <WhosWho />
          <BulletinBoard />
          <MinistersCarousel />
        </div>
      </div>
    </section>
  )
}
