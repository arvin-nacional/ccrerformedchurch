'use client'

import React from 'react'

const goldColor = '#B08D57'

function Statement({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <p>
      <strong style={{ color: goldColor }}>{num}</strong> {children}
    </p>
  )
}

function BibleLink({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <a href={`https://read.lsbible.org/?q=${q}`} target="_blank" style={{ color: goldColor }}>
      {children}
    </a>
  )
}

export function LastThingsSection() {
  return (
    <div
      id="last-things"
      className="px-[42px] py-[29px] shadow-xl rounded-3xl bg-white scroll-mt-32"
    >
      <h2 className="text-2xl font-bold mb-6 uppercase tracking-wide" style={{ color: goldColor }}>
        VI. THE LAST THINGS
      </h2>
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <div>
          <h3 className="text-lg font-semibold mb-3" style={{ color: goldColor }}>
            What We Teach Regarding the Return of Christ and the Millennial Reign
          </h3>
          <p className="mb-4 italic text-sm">
            While we affirm fellowship with believers of differing millennial convictions, we hold
            to the view that Christ will return before a literal, earthly millennium. What follows
            expresses this understanding with clarity and humility.
          </p>
          <div className="space-y-4">
            <Statement num="140">
              Before the final judgment, the Lord Jesus Christ will descend from heaven and rapture
              all believers to Himself, sparing them from the seven-year tribulation.{' '}
              <BibleLink q="1+Thessalonians+4%3A13-18">1 Thessalonians 4:13-18</BibleLink> |{' '}
              <BibleLink q="Matthew+24%3A27-31">Matthew 24:27-31</BibleLink>
            </Statement>
            <Statement num="141">
              The seven-year tribulation will bring the world under the wrath of God in increasing
              intensity. <BibleLink q="Daniel+9%3A24-27">Daniel 9:24-27</BibleLink> |{' '}
              <BibleLink q="Revelation+6-16">Revelation 6–16</BibleLink>
            </Statement>
            <Statement num="142">
              After the tribulation, Christ will return not as Savior but as King and Judge to
              establish His kingdom on the earth.{' '}
              <BibleLink q="Revelation+19%3A11-16">Revelation 19:11-16</BibleLink>
            </Statement>
            <Statement num="143">
              Christ will reign bodily on the earth for a thousand years in a kingdom marked by
              peace, justice, and righteousness, while Satan is bound.{' '}
              <BibleLink q="Revelation+20%3A1-4">Revelation 20:1-4</BibleLink>
            </Statement>
            <Statement num="144">
              After a thousand years, Satan will be released for a short time to deceive the nations
              one final time. <BibleLink q="Revelation+20%3A7-8">Revelation 20:7-8</BibleLink>
            </Statement>
            <Statement num="145">
              Satan will gather an army against the saints, but he will be defeated and cast into
              the lake of fire forever.{' '}
              <BibleLink q="Revelation+20%3A9-10">Revelation 20:9-10</BibleLink>
            </Statement>
            <Statement num="146">
              The unbelieving dead will be raised to face the great white throne judgment, and all
              who are not in Christ will be cast into the lake of fire for eternity.{' '}
              <BibleLink q="Revelation+20%3A11-15">Revelation 20:11-15</BibleLink>
            </Statement>
            <Statement num="147">
              This series of events will lead to the final renewal of all things: the new heaven and
              new earth, and the full manifestation of God&apos;s eternal kingdom.{' '}
              <BibleLink q="Revelation+21%3A1-2">Revelation 21:1-2</BibleLink>
            </Statement>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3" style={{ color: goldColor }}>
            What We Believe and Teach to Be True Concerning the End of All Things
          </h3>
          <div className="space-y-4">
            <Statement num="148">
              There will be an end to the world and its wicked ways | things will not simply
              continue this way just as death is sure to come for everyone, which is why the day to
              put one&apos;s faith in Christ Jesus is always today.{' '}
              <BibleLink q="Hebrews+9%3A27">Hebrews 9:27</BibleLink> |{' '}
              <BibleLink q="2+Peter+3%3A10">2 Peter 3:10</BibleLink>
            </Statement>
            <Statement num="149">
              All men will eventually be resurrected in their bodily form, and those who are in
              Christ will forever be with Christ in heaven, while those who have rejected Christ
              will forever experience punishment in hell.{' '}
              <BibleLink q="John+5%3A28-29">John 5:28-29</BibleLink> |{' '}
              <BibleLink q="Daniel+12%3A2">Daniel 12:2</BibleLink> |{' '}
              <BibleLink q="Matthew+25%3A31-46">Matthew 25:31-46</BibleLink>
            </Statement>
            <Statement num="150">
              Before this resurrection, believers who have passed away will already be with Christ,
              while those who rejected Christ will be in an intermediary state of conscious
              punishment. <BibleLink q="Luke+16%3A19-26">Luke 16:19-26</BibleLink> |{' '}
              <BibleLink q="2+Corinthians+5%3A8">2 Corinthians 5:8</BibleLink>
            </Statement>
            <Statement num="151">
              After the death of a person, there is no more chance for them to believe in Christ.{' '}
              <BibleLink q="Hebrews+9%3A27">Hebrews 9:27</BibleLink>
            </Statement>
            <Statement num="152">
              The reality is that until the very end and for eternity, unbelievers will forever
              reject and rebel against Christ.{' '}
              <BibleLink q="Revelation+20%3A10-15">Revelation 20:10-15</BibleLink>
            </Statement>
            <Statement num="153">
              The Lord Jesus Christ will return visibly and bodily to judge the living and the dead
              and to bring final and everlasting justice to the earth.{' '}
              <BibleLink q="2+Thessalonians+1%3A7-10">2 Thessalonians 1:7-10</BibleLink> |{' '}
              <BibleLink q="Revelation+22%3A12">Revelation 22:12</BibleLink>
            </Statement>
            <Statement num="154">
              There will be a new heaven and a new earth where all believers will be in glorious and
              eternal fellowship with the Triune God.{' '}
              <BibleLink q="Revelation+21%3A1-4">Revelation 21:1-4</BibleLink> |{' '}
              <BibleLink q="2+Peter+3%3A13">2 Peter 3:13</BibleLink>
            </Statement>
            <Statement num="155">
              In the final consummation, all who are in Christ will be restored to their Maker in
              perfect and eternal fellowship.{' '}
              <BibleLink q="Revelation+21%3A3-4">Revelation 21:3-4</BibleLink> |{' '}
              <BibleLink q="Romans+8%3A30">Romans 8:30</BibleLink>
            </Statement>
            <Statement num="156">
              This is not merely a return to Eden but the fulfillment of God&apos;s original
              eschatological purpose—what creation was always destined for before the fall.{' '}
              <BibleLink q="Ephesians+1%3A9-10">Ephesians 1:9-10</BibleLink> |{' '}
              <BibleLink q="Romans+8%3A18-23">Romans 8:18-23</BibleLink>
            </Statement>
            <Statement num="157">
              The final state of the believer in Christ surpasses the innocence of Adam, for it is a
              state of confirmed righteousness, tested faith, and glorified perfection accomplished
              by Christ, wherein we shall behold our Father face to face and remain in Him forever.{' '}
              <BibleLink q="1+Corinthians+15%3A49">1 Corinthians 15:49</BibleLink> |{' '}
              <BibleLink q="Revelation+22%3A3-5">Revelation 22:3-5</BibleLink> |{' '}
              <BibleLink q="1+John+3%3A2">1 John 3:2</BibleLink>
            </Statement>
          </div>
        </div>
      </div>
    </div>
  )
}
