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
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <Statement num="140">
          We affirm Christ will return before a literal, earthly millennium.{' '}
          <BibleLink q="Revelation+19%3A11-16">Revelation 19:11–16</BibleLink>;{' '}
          <BibleLink q="Revelation+20%3A1-6">Revelation 20:1–6</BibleLink>
        </Statement>
        <Statement num="141">
          After this tribulation, He will judge the world.{' '}
          <BibleLink q="Matthew+25%3A31-46">Matthew 25:31–46</BibleLink>
        </Statement>
        <Statement num="142">
          Satan, and reign for 1000 years.{' '}
          <BibleLink q="Revelation+20%3A1-4">Revelation 20:1–4</BibleLink>
        </Statement>
        <Statement num="143">
          After Satan&apos;s final defeat, the dead will be judged.{' '}
          <BibleLink q="Revelation+20%3A7-15">Revelation 20:7–15</BibleLink>
        </Statement>
        <Statement num="144">
          A new heaven and earth will be established, where believers dwell with God forever.{' '}
          <BibleLink q="Revelation+21%3A1-4">Revelation 21:1–4</BibleLink>
        </Statement>
        <Statement num="145">
          Until then, believers are called to faithfulness as we await our blessed hope.{' '}
          <BibleLink q="Titus+2%3A13">Titus 2:13</BibleLink>
        </Statement>
        <Statement num="146">
          Christ&apos;s return is imminent—He could come at any moment.{' '}
          <BibleLink q="Matthew+24%3A36">Matthew 24:36</BibleLink>;{' '}
          <BibleLink q="1+Thessalonians+5%3A2">1 Thessalonians 5:2</BibleLink>
        </Statement>
        <Statement num="147">
          At death, the believer&apos;s soul is immediately in the presence of the Lord.{' '}
          <BibleLink q="2+Corinthians+5%3A8">2 Corinthians 5:8</BibleLink>;{' '}
          <BibleLink q="Philippians+1%3A23">Philippians 1:23</BibleLink>
        </Statement>
        <Statement num="148">
          At death, the unbeliever&apos;s soul goes to a place of conscious torment.{' '}
          <BibleLink q="Luke+16%3A19-31">Luke 16:19–31</BibleLink>
        </Statement>
        <Statement num="149">
          There will be a bodily resurrection of all people.{' '}
          <BibleLink q="John+5%3A28-29">John 5:28–29</BibleLink>;{' '}
          <BibleLink q="Daniel+12%3A2">Daniel 12:2</BibleLink>
        </Statement>
        <Statement num="150">
          Believers will receive glorified bodies like Christ&apos;s.{' '}
          <BibleLink q="Philippians+3%3A20-21">Philippians 3:20–21</BibleLink>;{' '}
          <BibleLink q="1+Corinthians+15%3A42-44">1 Corinthians 15:42–44</BibleLink>
        </Statement>
        <Statement num="151">
          The unbeliever will be raised to face eternal judgment.{' '}
          <BibleLink q="Revelation+20%3A11-15">Revelation 20:11–15</BibleLink>
        </Statement>
        <Statement num="152">
          Hell is a place of eternal, conscious punishment.{' '}
          <BibleLink q="Matthew+25%3A46">Matthew 25:46</BibleLink>;{' '}
          <BibleLink q="Mark+9%3A48">Mark 9:48</BibleLink>
        </Statement>
        <Statement num="153">
          Believers will be rewarded according to their works.{' '}
          <BibleLink q="1+Corinthians+3%3A12-15">1 Corinthians 3:12–15</BibleLink>;{' '}
          <BibleLink q="2+Corinthians+5%3A10">2 Corinthians 5:10</BibleLink>
        </Statement>
        <Statement num="154">
          There will be a new heaven and a new earth where all believers will be in glorious and
          eternal fellowship with the Triune God.{' '}
          <BibleLink q="Revelation+21%3A1-4">Revelation 21:1-4</BibleLink>;{' '}
          <BibleLink q="2+Peter+3%3A13">2 Peter 3:13</BibleLink>
        </Statement>
        <Statement num="155">
          In the final consummation, all who are in Christ will be restored to their Maker in
          perfect and eternal fellowship.{' '}
          <BibleLink q="Revelation+21%3A3-4">Revelation 21:3-4</BibleLink>;{' '}
          <BibleLink q="Romans+8%3A30">Romans 8:30</BibleLink>
        </Statement>
        <Statement num="156">
          This is not merely a return to Eden but the fulfillment of God&apos;s original
          eschatological purpose—what creation was always destined for before the fall.{' '}
          <BibleLink q="Ephesians+1%3A9-10">Ephesians 1:9-10</BibleLink>;{' '}
          <BibleLink q="Romans+8%3A18-23">Romans 8:18-23</BibleLink>
        </Statement>
        <Statement num="157">
          The final state of the believer in Christ surpasses the innocence of Adam, for it is a
          state of confirmed righteousness, tested faith, and glorified perfection accomplished by
          Christ, wherein we shall behold our Father face to face and remain in Him forever.{' '}
          <BibleLink q="1+Corinthians+15%3A49">1 Corinthians 15:49</BibleLink>;{' '}
          <BibleLink q="Revelation+22%3A3-5">Revelation 22:3-5</BibleLink>;{' '}
          <BibleLink q="1+John+3%3A2">1 John 3:2</BibleLink>
        </Statement>
      </div>
    </div>
  )
}
