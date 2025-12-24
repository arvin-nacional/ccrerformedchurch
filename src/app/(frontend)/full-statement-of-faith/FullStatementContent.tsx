'use client'

import React from 'react'
import { SalvationSection } from './SalvationSection'
import { ChurchSection } from './ChurchSection'
import { LastThingsSection } from './LastThingsSection'

const goldColor = '#B08D57'

const LinkStyle = { color: goldColor }

export function FullStatementContent() {
  return (
    <div className="space-y-12">
      {/* THE BIBLE */}
      <Section title="I. THE BIBLE">
        <Statement num="1">
          The Bible (the original scriptures) is the Triune God&apos;s divinely and organically
          inspired written words and is His complete, infallible, and inerrant revelation of Himself
          and His redemptive plan for man.{' '}
          <BibleLink q="2+Timothy+2%3A15">2 Timothy 2:15</BibleLink> |{' '}
          <BibleLink q="2+Timothy+3%3A15-17">2 Timothy 3:15–17</BibleLink> |{' '}
          <BibleLink q="Psalm+119%3A160">Psalm 119:160</BibleLink> |{' '}
          <BibleLink q="Psalm+119%3A89">Psalm 119:89</BibleLink> |{' '}
          <BibleLink q="John+17%3A17">John 17:17</BibleLink>
        </Statement>
        <Statement num="2">
          If any error or misunderstanding is to be taken from the Bible, this is not an error of
          God but an error of man. <BibleLink q="2+Peter+1%3A20">2 Peter 1:20</BibleLink>
        </Statement>
        <Statement num="3">
          The Holy Spirit inspired the Bible through God&apos;s appointed individuals in biblical
          history. <BibleLink q="2+Peter+1%3A21">2 Peter 1:21</BibleLink>
        </Statement>
        <Statement num="4">
          The Lord allowed these individuals to keep their personalities, linguistic styles, and
          tones in their writings. <BibleLink q="2+Peter+1%3A21">2 Peter 1:21</BibleLink>
        </Statement>
        <Statement num="5">
          With over 40 different authors from different times, different places, and different
          circumstances, all that was written was and is in complete harmony and truthfulness.{' '}
          <BibleLink q="2+Peter+1%3A21">2 Peter 1:21</BibleLink>
        </Statement>
        <Statement num="6">
          Such is the beauty of the Bible. <BibleLink q="Psalm+119%3A160">Psalm 119:160</BibleLink>
        </Statement>
        <Statement num="7">
          The Bible does not contradict itself at any point.{' '}
          <BibleLink q="John+17%3A17">John 17:17</BibleLink>
        </Statement>
        <Statement num="8">
          The Bible is comprised of the 66 Books only of the Old and New Testament.{' '}
          <BibleLink q="Matthew+5%3A18">Matthew 5:18</BibleLink>
        </Statement>
        <Statement num="9">
          Any book outside of the 66, regardless of the truths found in them or the help they
          provide, is not the inspired written word of God.{' '}
          <BibleLink q="Matthew+24%3A35">Matthew 24:35</BibleLink>
        </Statement>
        <Statement num="10">
          The Bible is not just truthful in some parts, nor is it just truthful in concept; the
          Bible is true in all aspects down to the very words used.{' '}
          <BibleLink q="Matthew+5%3A18">Matthew 5:18</BibleLink>
        </Statement>
        <Statement num="11">
          Not all Bible translations are faithful to the original scriptures, so a faithful Bible
          aligned with the original scriptures must be what is used.{' '}
          <BibleLink q="2+Timothy+3%3A16">2 Timothy 3:16</BibleLink>
        </Statement>
        <Statement num="12">
          All scripture is profitable for all things in life and is the final and ultimate standard
          of truth in all things. <BibleLink q="2+Timothy+3%3A16">2 Timothy 3:16</BibleLink> |{' '}
          <BibleLink q="Hebrews+4%3A12">Hebrews 4:12</BibleLink>
        </Statement>
        <Statement num="13">
          This does not mean there are no other helpful books out there, but in matters of spiritual
          things and all moral and practical truths concerning the Christian, scripture is the final
          authority; moreover, scripture is not merely authoritative to those who believe, but is
          the inherent, absolute, and universal truth that governs all things and all people,
          regardless of belief—yet it is the Christian who is called to uphold it and live by it.{' '}
          <BibleLink q="2+Timothy+3%3A16">2 Timothy 3:16</BibleLink> |{' '}
          <BibleLink q="John+17%3A17">John 17:17</BibleLink> |{' '}
          <BibleLink q="Psalm+119%3A89">Psalm 119:89</BibleLink> |{' '}
          <BibleLink q="Isaiah+40%3A8">Isaiah 40:8</BibleLink> |{' '}
          <BibleLink q="Romans+3%3A3-4">Romans 3:3–4</BibleLink> |{' '}
          <BibleLink q="Hebrews+4%3A12">Hebrews 4:12</BibleLink>
        </Statement>
        <Statement num="14">
          All that the believer needs to know to give glory to the Lord and live lives that are
          continually maturing in the faith and unto Christlikeness is expressed and detailed in the
          scriptures. <BibleLink q="2+Timothy+3%3A16-17">2 Timothy 3:16–17</BibleLink>
        </Statement>
        <Statement num="15">
          The Bible is not a self-help book and is not to be treated as one where verses are
          cherry-picked to satisfy or justify a point.{' '}
          <BibleLink q="2+Timothy+3%3A16">2 Timothy 3:16</BibleLink>
        </Statement>
        <Statement num="16">
          Scripture is to be interpreted through a literal, grammatical, and historical study of the
          text. <BibleLink q="2+Timothy+2%3A15">2 Timothy 2:15</BibleLink>
        </Statement>
        <Statement num="17">
          What is critical to understand is what the original writers of scripture through the Holy
          Spirit intended to express. <BibleLink q="2+Peter+1%3A21">2 Peter 1:21</BibleLink>
        </Statement>
        <Statement num="18">
          The Bible is God-breathed in its totality, trustworthy, and reliable.{' '}
          <BibleLink q="2+Timothy+3%3A16">2 Timothy 3:16</BibleLink> |{' '}
          <BibleLink q="Hebrews+4%3A12">Hebrews 4:12</BibleLink>
        </Statement>
      </Section>

      {/* GOD */}
      <Section title="II. GOD">
        <Statement num="19">
          There is only one God. <BibleLink q="Deuteronomy+6%3A4">Deuteronomy 6:4</BibleLink>
        </Statement>
        <Statement num="20">
          He is the creator of all things and has decreed all things for His purposes and delight.{' '}
          <BibleLink q="Genesis+1%3A1">Genesis 1:1</BibleLink>;{' '}
          <BibleLink q="Revelation+4%3A11">Revelation 4:11</BibleLink>;{' '}
          <BibleLink q="Ephesians+1%3A11">Ephesians 1:11</BibleLink>
        </Statement>
        <Statement num="21">
          God is eternal, and no one was before God.{' '}
          <BibleLink q="Psalm+90%3A2">Psalm 90:2</BibleLink>;{' '}
          <BibleLink q="Isaiah+43%3A13">Isaiah 43:13</BibleLink>
        </Statement>
        <Statement num="22">
          While God is the creator of all things, He is completely without sin, does not author sin,
          and does not in any way approve of sin.{' '}
          <BibleLink q="Habakkuk+1%3A13">Habakkuk 1:13</BibleLink>;{' '}
          <BibleLink q="James+1%3A13">James 1:13</BibleLink>
        </Statement>
        <Statement num="23">
          God is sovereignly over all things, yet without sin.{' '}
          <BibleLink q="Isaiah+46%3A9-10">Isaiah 46:9-10</BibleLink>;{' '}
          <BibleLink q="Romans+8%3A28">Romans 8:28</BibleLink>
        </Statement>
        <Statement num="24">
          God&apos;s attributes are expressed throughout the scriptures, and God expresses all these
          attributes in perfect unity. <BibleLink q="Exodus+34%3A6-7">Exodus 34:6-7</BibleLink>;{' '}
          <BibleLink q="Psalm+145%3A17">Psalm 145:17</BibleLink>
        </Statement>
        <Statement num="25">
          Our God is a Triune God—one indivisible divine essence in three personal subsistences: God
          the Father, God the Son, and God the Holy Spirit—each co-eternal, co-equal, and distinct
          in person, yet of one nature. <BibleLink q="Matthew+28%3A19">Matthew 28:19</BibleLink>;{' '}
          <BibleLink q="2+Corinthians+13%3A14">2 Corinthians 13:14</BibleLink>;{' '}
          <BibleLink q="John+1%3A1-3">John 1:1–3</BibleLink>;{' '}
          <BibleLink q="Hebrews+1%3A3">Hebrews 1:3</BibleLink>;{' '}
          <BibleLink q="1+Corinthians+8%3A6">1 Corinthians 8:6</BibleLink>
        </Statement>
        <Statement num="26">
          Each deserves equal glory, praise, and worship from all creatures.{' '}
          <BibleLink q="Revelation+5%3A13-14">Revelation 5:13-14</BibleLink>;{' '}
          <BibleLink q="Philippians+2%3A10-11">Philippians 2:10-11</BibleLink>
        </Statement>

        <SubSection title="God the Father" />
        <Statement num="27">
          God the Father in His distinct person is the sovereign One who governs all things.{' '}
          <BibleLink q="Ephesians+1%3A3-5">Ephesians 1:3-5</BibleLink>;{' '}
          <BibleLink q="Psalm+115%3A3">Psalm 115:3</BibleLink>
        </Statement>
        <Statement num="28">
          From eternity past, God the Father has determined of everyone born into the world, who
          will be those that will come to Him in faith through Christ Jesus.{' '}
          <BibleLink q="John+6%3A37">John 6:37</BibleLink>;{' '}
          <BibleLink q="Romans+8%3A29-30">Romans 8:29-30</BibleLink>
        </Statement>

        <SubSection title="Jesus Christ – God the Son" />
        <Statement num="29">
          God the Son, in His distinct person, is through whom all things are made and is the One
          who holds all things together and is the sinless Lamb of God.{' '}
          <BibleLink q="John+1%3A1-3">John 1:1-3</BibleLink>;{' '}
          <BibleLink q="Colossians+1%3A16-17">Colossians 1:16-17</BibleLink>;{' '}
          <BibleLink q="John+1%3A29">John 1:29</BibleLink>
        </Statement>
        <Statement num="30">
          God the Son, at the appointed time, entered the world through the virgin birth of Mary,
          conceived by the Holy Spirit. <BibleLink q="Luke+1%3A35">Luke 1:35</BibleLink>;{' '}
          <BibleLink q="Galatians+4%3A4">Galatians 4:4</BibleLink>
        </Statement>
        <Statement num="31">
          Christ Jesus became truly man in humility without diminishing His deity in any way.{' '}
          <BibleLink q="Philippians+2%3A5-8">Philippians 2:5-8</BibleLink>;{' '}
          <BibleLink q="Colossians+2%3A9">Colossians 2:9</BibleLink>
        </Statement>
        <Statement num="32">
          While Christ is truly God and truly man, even to this day, at the time of His earthly
          ministry, there were moments where He would humble the capacities of His being truly God,
          while at times, He would express it. <BibleLink q="John+10%3A30">John 10:30</BibleLink>;{' '}
          <BibleLink q="John+14%3A9">John 14:9</BibleLink>;{' '}
          <BibleLink q="Luke+24%3A38-39">Luke 24:38–39</BibleLink>;{' '}
          <BibleLink q="John+10%3A37-38">John 10:37–38</BibleLink>
        </Statement>
        <Statement num="33">
          This was to prove to the world that Christ Jesus is, indeed, truly God and truly man.{' '}
          <BibleLink q="John+1%3A14">John 1:14</BibleLink>;{' '}
          <BibleLink q="John+20%3A28">John 20:28</BibleLink>;{' '}
          <BibleLink q="Matthew+28%3A6">Matthew 28:6</BibleLink>
        </Statement>
        <Statement num="34">
          God the Son had to come to the world as truly man for His death to represent humanity and
          so to die physically. <BibleLink q="Hebrews+2%3A17">Hebrews 2:17</BibleLink>;{' '}
          <BibleLink q="1+Peter+3%3A18">1 Peter 3:18</BibleLink>
        </Statement>
        <Statement num="35">
          God the Son had to also remain as truly God so that His death would become a satisfactory
          atonement for the sins of man because He alone is the righteous and sinless one.{' '}
          <BibleLink q="Hebrews+9%3A14">Hebrews 9:14</BibleLink>;{' '}
          <BibleLink q="2+Corinthians+5%3A21">2 Corinthians 5:21</BibleLink>;{' '}
          <BibleLink q="Romans+5%3A8">Romans 5:8</BibleLink>
        </Statement>
        <Statement num="36">
          The death and eternal punishment that elect men deserve for their sins would be imputed
          unto Christ through His shed blood on the cross, while the righteousness of Christ would
          be imputed unto all who believe in Him as Lord and Savior.{' '}
          <BibleLink q="Romans+3%3A25-26">Romans 3:25–26</BibleLink>;{' '}
          <BibleLink q="Romans+5%3A18-19">Romans 5:18–19</BibleLink>;{' '}
          <BibleLink q="1+Peter+2%3A24">1 Peter 2:24</BibleLink>
        </Statement>
        <Statement num="37">
          Apart from faith in the redemptive and sacrificial work of Christ Jesus on the cross,
          leading to His death, burial, resurrection, and ascension, absolutely no one will be saved
          from eternal condemnation because of sin. <BibleLink q="John+14%3A6">John 14:6</BibleLink>
          ; <BibleLink q="Acts+4%3A12">Acts 4:12</BibleLink>;{' '}
          <BibleLink q="1+Corinthians+15%3A3-4">1 Corinthians 15:3–4</BibleLink>
        </Statement>
        <Statement num="38">
          Christ Jesus is the only way, the only truth, and the life; no one comes to God the Father
          to mean saved by grace for eternity, apart from and by Christ Jesus.{' '}
          <BibleLink q="John+14%3A6">John 14:6</BibleLink>
        </Statement>

        <SubSection title="God the Holy Spirit" />
        <Statement num="39">
          God the Spirit in His distinct person is the One who regenerates a wicked man unto a
          belief unto Christ Jesus. <BibleLink q="John+3%3A5-6">John 3:5–6</BibleLink>;{' '}
          <BibleLink q="Titus+3%3A5">Titus 3:5</BibleLink>
        </Statement>
        <Statement num="40">
          He indwells the believer, seals the believer, instructs, and guides the believer to live
          out His transformed and new life in Christ until Christ calls the believer home.{' '}
          <BibleLink q="Ephesians+1%3A13">Ephesians 1:13</BibleLink>;{' '}
          <BibleLink q="Ephesians+4%3A30">Ephesians 4:30</BibleLink>;{' '}
          <BibleLink q="John+14%3A26">John 14:26</BibleLink>;{' '}
          <BibleLink q="Romans+8%3A9">Romans 8:9</BibleLink>;{' '}
          <BibleLink q="Romans+8%3A14">Romans 8:14</BibleLink>
        </Statement>
        <Statement num="41">
          God the Spirit equips the believer to live out that which is now true of Him the moment he
          was justified by grace alone, through faith alone, in Christ Jesus alone.{' '}
          <BibleLink q="Galatians+5%3A16">Galatians 5:16</BibleLink>;{' '}
          <BibleLink q="Romans+8%3A4">Romans 8:4</BibleLink>
        </Statement>

        <SubSection title="The Triunity of God" />
        <Statement num="42">
          The Triunity of God is one of the doctrines that may be difficult to grasp or share, but
          only so to the one who has not yet been regenerated.{' '}
          <BibleLink q="1+Corinthians+2%3A14">1 Corinthians 2:14</BibleLink>
        </Statement>
        <Statement num="43">
          The Trinity is not a thing to be argued but simply a scriptural fact to be declared about
          God. <BibleLink q="Deuteronomy+29%3A29">Deuteronomy 29:29</BibleLink>;{' '}
          <BibleLink q="John+1%3A1">John 1:1</BibleLink>;{' '}
          <BibleLink q="John+14%3A16-17">John 14:16–17</BibleLink>
        </Statement>
        <Statement num="44">
          Hence, any attempt to explain the Trinity through man-made illustrations and/or analogies
          will fall short of capturing the full and true essence of this reality about our God.{' '}
          <BibleLink q="Isaiah+40%3A18">Isaiah 40:18</BibleLink>;{' '}
          <BibleLink q="Romans+11%3A33">Romans 11:33</BibleLink>
        </Statement>
      </Section>

      {/* MAN */}
      <Section title="III. MAN">
        <Statement num="45">
          All men are created in the image of God.{' '}
          <BibleLink q="Genesis+1%3A26-27">Genesis 1:26–27</BibleLink>
        </Statement>
        <Statement num="46">
          Adam and Eve, in their original state, were free from sin.{' '}
          <BibleLink q="Genesis+2%3A7">Genesis 2:7</BibleLink>
        </Statement>
        <Statement num="47">
          Man is created as only male or female by biological sex at birth.{' '}
          <BibleLink q="Genesis+1%3A27">Genesis 1:27</BibleLink>;{' '}
          <BibleLink q="Matthew+19%3A4">Matthew 19:4</BibleLink>
        </Statement>
        <Statement num="48">
          Whatever feelings, mindset, or medical adjustments take place, this person will ultimately
          have an original and true biological sex at birth, either male or female.{' '}
          <BibleLink q="Psalm+139%3A13-14">Psalm 139:13–14</BibleLink>
        </Statement>
        <Statement num="49">
          While scripture would allude to the existence of individuals who neither conformed to male
          nor female biological sex roles, these are not to be taken as an acceptance in scripture
          of such. <BibleLink q="Leviticus+18%3A22">Leviticus 18:22</BibleLink>;{' '}
          <BibleLink q="Romans+1%3A26-27">Romans 1:26–27</BibleLink>;{' '}
          <BibleLink q="1+Corinthians+6%3A9-10">1 Corinthians 6:9–10</BibleLink>
        </Statement>
        <Statement num="50">
          Men are created to bring glory to God and for the glory of God.{' '}
          <BibleLink q="Colossians+1%3A16">Colossians 1:16</BibleLink>,{' '}
          <BibleLink q="Revelation+4%3A11">Revelation 4:11</BibleLink>,{' '}
          <BibleLink q="1+Corinthians+10%3A31">1 Corinthians 10:31</BibleLink>
        </Statement>
        <Statement num="51">
          This means to love the Lord our God above all else and to love our neighbors.{' '}
          <BibleLink q="Matthew+22%3A37-39">Matthew 22:37–39</BibleLink>
        </Statement>
        <Statement num="52">
          This means loving all things according to God&apos;s original design and purpose, but it
          also means being merciful, gracious, and gentle but truthful to those who have yet come to
          the saving knowledge of Christ Jesus.{' '}
          <BibleLink q="Ephesians+4%3A15">Ephesians 4:15</BibleLink>;{' '}
          <BibleLink q="Colossians+4%3A6">Colossians 4:6</BibleLink>
        </Statement>
        <Statement num="53">
          Tragically, because of Adam and Eve&apos;s favoring of their glory rather than God&apos;s
          glory, and with help from the serpent&apos;s temptations, they both fell into sin and
          condemnation, and through this, all men are born into the world in sin.{' '}
          <BibleLink q="Genesis+3%3A1-19">Genesis 3:1–19</BibleLink>,{' '}
          <BibleLink q="Romans+5%3A12">Romans 5:12</BibleLink>,{' '}
          <BibleLink q="Romans+5%3A18-19">Romans 5:18–19</BibleLink>
        </Statement>
        <Statement num="54">
          This tragedy didn&apos;t just bring sin into the picture and in the hearts and minds of
          men; it also caused a massive separation between the creator God and His created beings, a
          separation that cannot be bridged by man, for God is thrice holy, and He cannot have
          anything to do with sin and wickedness.{' '}
          <BibleLink q="Isaiah+59%3A2">Isaiah 59:2</BibleLink>,{' '}
          <BibleLink q="Romans+3%3A23">Romans 3:23</BibleLink>,{' '}
          <BibleLink q="1+John+1%3A8">1 John 1:8</BibleLink>
        </Statement>
        <Statement num="55">
          The wrath of God is upon man, and unless and until man believes in Christ Jesus as his
          personal Lord and Savior, he is at enmity with God.{' '}
          <BibleLink q="John+3%3A36">John 3:36</BibleLink>;{' '}
          <BibleLink q="Romans+5%3A10">Romans 5:10</BibleLink>
        </Statement>
        <Statement num="56">
          There is no such thing as a neutral state for man.{' '}
          <BibleLink q="Ephesians+2%3A1-3">Ephesians 2:1–3</BibleLink>
        </Statement>
        <Statement num="57">
          He is either a child of God or an enemy of God, and by and through sin, man, since the
          fall, will always be born as an enemy of God.{' '}
          <BibleLink q="Romans+5%3A12">Romans 5:12</BibleLink>;{' '}
          <BibleLink q="Romans+6%3A23">Romans 6:23</BibleLink>
        </Statement>
        <Statement num="58">
          Man is corrupt in his nature and unable and incapable of truly knowing and desiring God
          apart from divine intervention from the Holy Spirit.{' '}
          <BibleLink q="1+Corinthians+2%3A14">1 Corinthians 2:14</BibleLink>,{' '}
          <BibleLink q="Romans+3%3A9-18">Romans 3:9–18</BibleLink>
        </Statement>
        <Statement num="59">
          While man can practice good deeds and even behave in a manner that demonstrates moral
          goodness in life because the laws of God are written in their hearts, these things that
          the world would consider good behavior or good works will all amount to nothing to the
          Lord and in His sight; all are filthy rags before Him because God&apos;s demand is not
          only sporadic goodness, His demand is eternal perfection, and that is a state no man can
          attain. <BibleLink q="Romans+2%3A14-15">Romans 2:14–15</BibleLink>;{' '}
          <BibleLink q="Isaiah+64%3A6">Isaiah 64:6</BibleLink>;{' '}
          <BibleLink q="Romans+3%3A20">Romans 3:20</BibleLink>
        </Statement>
      </Section>

      <SalvationSection />
      <ChurchSection />
      <LastThingsSection />
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="px-[42px] py-[29px] shadow-xl rounded-3xl bg-white">
      <h2 className="text-2xl font-bold mb-6 uppercase tracking-wide" style={{ color: goldColor }}>
        {title}
      </h2>
      <div className="space-y-4 text-gray-700 leading-relaxed">{children}</div>
    </div>
  )
}

function SubSection({ title }: { title: string }) {
  return (
    <h3 className="text-xl font-bold mt-8 mb-4" style={{ color: goldColor }}>
      {title}
    </h3>
  )
}

function Statement({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <p>
      <strong style={{ color: goldColor }}>{num}</strong> {children}
    </p>
  )
}

function BibleLink({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <a href={`https://read.lsbible.org/?q=${q}`} target="_blank" style={LinkStyle}>
      {children}
    </a>
  )
}
