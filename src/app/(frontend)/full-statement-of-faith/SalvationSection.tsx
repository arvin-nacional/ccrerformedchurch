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

function SubSection({ title }: { title: string }) {
  return (
    <h3 className="text-xl font-bold mt-8 mb-4" style={{ color: goldColor }}>
      {title}
    </h3>
  )
}

export function SalvationSection() {
  return (
    <div id="salvation" className="px-[42px] py-[29px] shadow-xl rounded-3xl bg-white scroll-mt-32">
      <h2 className="text-2xl font-bold mb-6 uppercase tracking-wide" style={{ color: goldColor }}>
        IV. SALVATION
      </h2>
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <Statement num="60">
          Despite the rebellion of the creature against His creator, God loved the world that He
          gave His only Son, and whoever believes in Him alone for their salvation will be saved
          from eternal destruction and separation from God and instead experience forgiveness and
          eternal life in and with Christ. <BibleLink q="John+3:16">John 3:16</BibleLink>;{' '}
          <BibleLink q="Romans+5:8">Romans 5:8</BibleLink>;{' '}
          <BibleLink q="John+1:12">John 1:12</BibleLink>
        </Statement>
        <Statement num="61">
          Salvation can only be achieved by the grace of God alone, through faith alone, in Christ
          alone. <BibleLink q="Ephesians+2:8-9">Ephesians 2:8–9</BibleLink>;{' '}
          <BibleLink q="Titus+3:5">Titus 3:5</BibleLink>;{' '}
          <BibleLink q="Romans+3:28">Romans 3:28</BibleLink>
        </Statement>
        <Statement num="62">
          There is no other way unto heaven and salvation apart from faith in Christ Jesus.{' '}
          <BibleLink q="Acts+4:12">Acts 4:12</BibleLink>;{' '}
          <BibleLink q="John+14:6">John 14:6</BibleLink>;{' '}
          <BibleLink q="John+5:24">John 5:24</BibleLink>
        </Statement>
        <Statement num="63">
          The doctrine of Salvation can be best encapsulated, while not exhaustive, in the acronym
          T.U.L.I.P. <BibleLink q="Romans+9:16">Romans 9:16</BibleLink>;{' '}
          <BibleLink q="2+Thessalonians+2:13">2 Thessalonians 2:13</BibleLink>;{' '}
          <BibleLink q="Romans+8:29-30">Romans 8:29–30</BibleLink>
        </Statement>

        <SubSection title="Total Depravity" />
        <Statement num="64">
          Man is unable and incapable of producing any sort of righteousness that would be
          acceptable, pleasing, or satisfying to the Lord.{' '}
          <BibleLink q="Romans+3:10-12">Romans 3:10–12</BibleLink>;{' '}
          <BibleLink q="Romans+3:23">Romans 3:23</BibleLink>
        </Statement>
        <Statement num="65">
          To make things even more difficult, man does not even desire to know God.{' '}
          <BibleLink q="Romans+3:11">Romans 3:11</BibleLink>;{' '}
          <BibleLink q="Romans+8:7-8">Romans 8:7–8</BibleLink>
        </Statement>
        <Statement num="66">
          Man is in active rebellion and rejection of God and Christ Jesus.{' '}
          <BibleLink q="Romans+8:7-8">Romans 8:7–8</BibleLink>;{' '}
          <BibleLink q="John+3:18-20">John 3:18–20</BibleLink>
        </Statement>
        <Statement num="67">
          Whatever stimulations or acts that men may pursue that may seem like a seeking for God or
          a seeking for salvation is, in fact, only a seeking of the benefits and privileges of what
          they see from people who possess the faith. <BibleLink q="John+6:26">John 6:26</BibleLink>
          ; <BibleLink q="John+2:23-25">John 2:23–25</BibleLink>;{' '}
          <BibleLink q="John+5:40">John 5:40</BibleLink>
        </Statement>
        <Statement num="68">
          Ultimately, whatever good deeds man may commit, these are still driven by selfish gain.{' '}
          <BibleLink q="Isaiah+64:6">Isaiah 64:6</BibleLink>;{' '}
          <BibleLink q="Romans+3:20">Romans 3:20</BibleLink>
        </Statement>
        <Statement num="69">
          Man is completely depraved because of sin and is therefore deserving of eternal punishment
          and separation from God. <BibleLink q="Romans+6:23">Romans 6:23</BibleLink>;{' '}
          <BibleLink q="Ephesians+2:1-3">Ephesians 2:1–3</BibleLink>;{' '}
          <BibleLink q="Romans+5:12">Romans 5:12</BibleLink>
        </Statement>

        <SubSection title="Unconditional Election" />
        <Statement num="70">
          The Triune God, in His sovereign will and purposes, has already chosen, from before the
          world began, the exact people who will come to faith in Christ Jesus and be with Him for
          eternity in heaven. <BibleLink q="Ephesians+1:4-5">Ephesians 1:4–5</BibleLink>;{' '}
          <BibleLink q="2+Timothy+2:10">2 Timothy 2:10</BibleLink>;{' '}
          <BibleLink q="Romans+8:28-30">Romans 8:28–30</BibleLink>
        </Statement>
        <Statement num="71">
          The reason for the choosing is completely of the Lord&apos;s prerogative as creator God.{' '}
          <BibleLink q="Romans+9:15-16">Romans 9:15–16</BibleLink>;{' '}
          <BibleLink q="Romans+11:5-6">Romans 11:5–6</BibleLink>
        </Statement>
        <Statement num="72">
          Hence, the election of people who will come to faith in Christ is not conditioned upon how
          people live their lives but solely on God&apos;s divine will.{' '}
          <BibleLink q="Romans+9:11-13">Romans 9:11–13</BibleLink>;{' '}
          <BibleLink q="Romans+9:19-23">Romans 9:19–23</BibleLink>
        </Statement>
        <Statement num="73">
          For the unregenerated person, this will be received as unfair and cruel but for the
          regenerated person, through the Holy Spirit&apos;s illumination of the heart and the mind,
          this will be received as a mercy.{' '}
          <BibleLink q="1+Corinthians+2:14">1 Corinthians 2:14</BibleLink>;{' '}
          <BibleLink q="Romans+11:5-6">Romans 11:5–6</BibleLink>;{' '}
          <BibleLink q="Ephesians+1:11">Ephesians 1:11</BibleLink>
        </Statement>
        <Statement num="74">
          Because the issue no longer becomes why does God choose but rather, why did God choose me?{' '}
          <BibleLink q="Romans+9:20-23">Romans 9:20–23</BibleLink>;{' '}
          <BibleLink q="Romans+3:4">Romans 3:4</BibleLink>
        </Statement>
        <Statement num="75">
          While God unconditionally elects those who belong to the Son, because this is not a
          knowledge man is aware of, as far as man is concerned, he is fully responsible for his
          sins and is fully responsible for repenting of these sins unto the Lord and personally
          believe in Christ as their Lord and Savior. <BibleLink q="Acts+2:38">Acts 2:38</BibleLink>
          ; <BibleLink q="Romans+10:9-10">Romans 10:9–10</BibleLink>;{' '}
          <BibleLink q="Luke+13:3">Luke 13:3</BibleLink>
        </Statement>

        <SubSection title="Limited Atonement" />
        <Statement num="76">
          The death of Christ on the cross is sufficient to pay for the sins of the world.{' '}
          <BibleLink q="1+John+2:2">1 John 2:2</BibleLink>;{' '}
          <BibleLink q="John+1:29">John 1:29</BibleLink>;{' '}
          <BibleLink q="John+3:16">John 3:16</BibleLink>
        </Statement>
        <Statement num="77">
          However, the application of the payment and redemption of sin is only for the elect and
          those who will repent and believe in the Lord Jesus Christ.{' '}
          <BibleLink q="John+10:14-15">John 10:14–15</BibleLink>;{' '}
          <BibleLink q="John+17:9">John 17:9</BibleLink>;{' '}
          <BibleLink q="Ephesians+5:25">Ephesians 5:25</BibleLink>
        </Statement>
        <Statement num="78">
          Christ did not die for those who will not believe. His death does not save them nor was it
          intended to save them. <BibleLink q="John+10:26">John 10:26</BibleLink>;{' '}
          <BibleLink q="Romans+9:15-18">Romans 9:15–18</BibleLink>
        </Statement>
        <Statement num="79">
          Therefore, His death fully secures the salvation of His people because it was always
          definite and specific. <BibleLink q="John+6:37-39">John 6:37–39</BibleLink>;{' '}
          <BibleLink q="Hebrews+9:28">Hebrews 9:28</BibleLink>
        </Statement>
        <Statement num="80">
          Christ&apos;s atonement is limited not in its power, but in its application.{' '}
          <BibleLink q="Acts+13:48">Acts 13:48</BibleLink>;{' '}
          <BibleLink q="Matthew+1:21">Matthew 1:21</BibleLink>;{' '}
          <BibleLink q="Romans+8:33-34">Romans 8:33–34</BibleLink>
        </Statement>

        <SubSection title="Irresistible Grace" />
        <Statement num="81">
          Anyone that God decrees to be set free from the bondage of sin, death, and depravity will
          be set free indeed. <BibleLink q="John+8:36">John 8:36</BibleLink>
        </Statement>
        <Statement num="82">
          All whom God the Father has unconditionally elected to be part of those who will be atoned
          for by the sacrifice of Christ will truly come to the Lord Jesus Christ in faith, in
          God&apos;s perfect and appointed time for him.{' '}
          <BibleLink q="John+6:37">John 6:37</BibleLink>;{' '}
          <BibleLink q="Romans+8:30">Romans 8:30</BibleLink>;{' '}
          <BibleLink q="John+10:29">John 10:29</BibleLink>
        </Statement>
        <Statement num="83">
          In this appointed time, this individual will be regenerated by the Holy Spirit.{' '}
          <BibleLink q="John+3:5-6">John 3:5–6</BibleLink>;{' '}
          <BibleLink q="Titus+3:5">Titus 3:5</BibleLink>;{' '}
          <BibleLink q="John+1:13">John 1:13</BibleLink>
        </Statement>
        <Statement num="84">
          This means, the blinds from his eyes that desire not God, reject God, and fail to see God
          in all of life, will be spiritually removed and this person will immediately see their
          sinfulness and their need for a savior. <BibleLink q="Acts+26:18">Acts 26:18</BibleLink>;{' '}
          <BibleLink q="2+Corinthians+4:6">2 Corinthians 4:6</BibleLink>
        </Statement>
        <Statement num="85">
          At this appointed time, this person will be overwhelmed with the grace, mercy, and
          forgiveness of Christ Jesus. <BibleLink q="Romans+2:4">Romans 2:4</BibleLink>;{' '}
          <BibleLink q="Ephesians+2:4-5">Ephesians 2:4–5</BibleLink>;{' '}
          <BibleLink q="1+John+4:10">1 John 4:10</BibleLink>
        </Statement>
        <Statement num="86">
          God will then gift this person the faith to believe in the gospel message of Jesus Christ.{' '}
          <BibleLink q="Philippians+1:29">Philippians 1:29</BibleLink>;{' '}
          <BibleLink q="Ephesians+1:13-14">Ephesians 1:13–14</BibleLink>
        </Statement>
        <Statement num="87">
          The moment the person confesses with his mouth that Jesus is Lord and believes in his
          heart that God raised Christ Jesus from the dead, he is at this point justified, which
          means, this person is now declared righteous by God through the righteousness of Christ
          achieved on this person&apos;s behalf, because of the sacrifice of Christ Jesus on the
          cross and His victory over sin and death at His resurrection.{' '}
          <BibleLink q="Romans+10:9-10">Romans 10:9–10</BibleLink>;{' '}
          <BibleLink q="Romans+4:25">Romans 4:25</BibleLink>
        </Statement>
        <Statement num="88">
          The grace provided by God to the once-sinner is irresistible because God has elected him
          to be saved. <BibleLink q="Romans+8:29-30">Romans 8:29–30</BibleLink>;{' '}
          <BibleLink q="John+6:44">John 6:44</BibleLink>
        </Statement>
        <Statement num="89">
          In the point of view of man, it is also irresistible because man truly will desire not to
          resist such a grace and such a mercy gifted to him by the Triune God.{' '}
          <BibleLink q="Psalm+110:3">Psalm 110:3</BibleLink>;{' '}
          <BibleLink q="Romans+8:14">Romans 8:14</BibleLink>
        </Statement>
        <Statement num="90">
          Should anyone seem to display an active resistance to the calling of God, he is either in
          disobedience already to the truths that have been gifted to him by the Holy Spirit, but in
          due time, he will conform. <BibleLink q="Philippians+1:6">Philippians 1:6</BibleLink>;{' '}
          <BibleLink q="Acts+20:32">Acts 20:32</BibleLink>
        </Statement>
        <Statement num="91">
          However, it is also possible that the person simply may not have been regenerated. Hence,
          his active and willful &quot;resisting&quot;—for how can one resist what has not been
          gifted to him? <BibleLink q="John+8:43-44">John 8:43–44</BibleLink>;{' '}
          <BibleLink q="1+John+2:19">1 John 2:19</BibleLink>;{' '}
          <BibleLink q="John+3:3-7">John 3:3–7</BibleLink>
        </Statement>

        <SubSection title="Perseverance of the Saints" />
        <Statement num="92">
          All believers in Christ will conform more and more to the image of their Savior, Christ
          Jesus. <BibleLink q="2+Corinthians+3%3A18">2 Corinthians 3:18</BibleLink>;{' '}
          <BibleLink q="Romans+8%3A29">Romans 8:29</BibleLink>;{' '}
          <BibleLink q="1+Thessalonians+4%3A3-4">1 Thessalonians 4:3–4</BibleLink>
        </Statement>
        <Statement num="93">
          Believers will never be sinless while they remain in the world, but they will sin less and
          less. <BibleLink q="1+John+1%3A8">1 John 1:8</BibleLink>;{' '}
          <BibleLink q="Philippians+3%3A12">Philippians 3:12</BibleLink>
        </Statement>
        <Statement num="94">
          Believers will grow in loving what God loves and they will grow in despising what God
          despises. <BibleLink q="Romans+12%3A9">Romans 12:9</BibleLink>;{' '}
          <BibleLink q="Galatians+5%3A22-25">Galatians 5:22–25</BibleLink>
        </Statement>
        <Statement num="95">
          In short, believers abide more and more in the Word. This is a guarantee for all
          believers. <BibleLink q="John+15%3A4-5">John 15:4–5</BibleLink>;{' '}
          <BibleLink q="John+17%3A17">John 17:17</BibleLink>;{' '}
          <BibleLink q="Acts+20%3A32">Acts 20:32</BibleLink>
        </Statement>
        <Statement num="96">
          The Holy Spirit that indwells all believers will guide them and sanctify them all the days
          of their life. <BibleLink q="John+16%3A13">John 16:13</BibleLink>;{' '}
          <BibleLink q="Romans+8%3A14">Romans 8:14</BibleLink>;{' '}
          <BibleLink q="Ephesians+4%3A30">Ephesians 4:30</BibleLink>
        </Statement>
        <Statement num="97">
          God the Father elects the people to be saved, God the Son atones for their sins, and God
          the Holy Spirit sanctifies them and keeps them in the faith until Christ calls them home.{' '}
          <BibleLink q="Ephesians+1%3A4-5">Ephesians 1:4–5</BibleLink>;{' '}
          <BibleLink q="John+10%3A28-29">John 10:28–29</BibleLink>;{' '}
          <BibleLink q="Philippians+1%3A6">Philippians 1:6</BibleLink>
        </Statement>
        <Statement num="98">
          True believers will continue in faith until the end.{' '}
          <BibleLink q="John+10%3A27-29">John 10:27–29</BibleLink>;{' '}
          <BibleLink q="1+Peter+1%3A3-5">1 Peter 1:3–5</BibleLink>
        </Statement>
        <Statement num="99">
          This does not mean the believer will not struggle with sin or have seasons of spiritual
          dryness. <BibleLink q="Romans+7%3A15-25">Romans 7:15–25</BibleLink>;{' '}
          <BibleLink q="Galatians+5%3A17">Galatians 5:17</BibleLink>
        </Statement>
        <Statement num="100">
          But true believers will not permanently fall away from the faith.{' '}
          <BibleLink q="1+John+2%3A19">1 John 2:19</BibleLink>;{' '}
          <BibleLink q="Hebrews+3%3A14">Hebrews 3:14</BibleLink>
        </Statement>
        <Statement num="101">
          Those who do fall away were never truly saved.{' '}
          <BibleLink q="1+John+2%3A19">1 John 2:19</BibleLink>;{' '}
          <BibleLink q="Matthew+7%3A21-23">Matthew 7:21–23</BibleLink>
        </Statement>
        <Statement num="102">
          The security of the believer rests not in the believer&apos;s ability to hold on to God
          but in God&apos;s promise to hold on to the believer.{' '}
          <BibleLink q="John+10%3A28-29">John 10:28–29</BibleLink>;{' '}
          <BibleLink q="Romans+8%3A38-39">Romans 8:38–39</BibleLink>;{' '}
          <BibleLink q="Jude+24">Jude 24</BibleLink>
        </Statement>
      </div>
    </div>
  )
}
