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

export function ChurchSection() {
  return (
    <div className="px-[42px] py-[29px] shadow-xl rounded-3xl bg-white">
      <h2 className="text-2xl font-bold mb-6 uppercase tracking-wide" style={{ color: goldColor }}>
        V. THE CHURCH
      </h2>
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <Statement num="103">
          Christ is the head of the church, which is His body and bride.{' '}
          <BibleLink q="Ephesians+1%3A22-23">Ephesians 1:22–23</BibleLink>;{' '}
          <BibleLink q="Colossians+1%3A18">Colossians 1:18</BibleLink>
        </Statement>
        <Statement num="104">
          A local church is a gathering of regenerated believers in covenant community.{' '}
          <BibleLink q="Acts+2%3A42">Acts 2:42</BibleLink>;{' '}
          <BibleLink q="Hebrews+10%3A24-25">Hebrews 10:24–25</BibleLink>
        </Statement>
        <Statement num="105">
          The church preaches doctrine, exercises patrony and pastoral care, glorifies God through
          discipleship, evangelism, and worship.{' '}
          <BibleLink q="Matthew+28%3A19-20">Matthew 28:19–20</BibleLink>;{' '}
          <BibleLink q="Ephesians+4%3A11-16">Ephesians 4:11–16</BibleLink>
        </Statement>
        <Statement num="106">
          The church practices baptism and the Lord&apos;s Supper as ordinances.{' '}
          <BibleLink q="Matthew+28%3A19">Matthew 28:19</BibleLink>;{' '}
          <BibleLink q="1+Corinthians+11%3A23-26">1 Corinthians 11:23–26</BibleLink>
        </Statement>
        <Statement num="107">
          Baptism is an outward sign of an inward reality—the believer&apos;s identification with
          Christ in His death, burial, and resurrection.{' '}
          <BibleLink q="Romans+6%3A3-4">Romans 6:3–4</BibleLink>;{' '}
          <BibleLink q="Acts+8%3A36-39">Acts 8:36–39</BibleLink>
        </Statement>
        <Statement num="108">
          The Lord&apos;s Supper is a memorial of Christ&apos;s sacrificial death and a proclamation
          of His return. <BibleLink q="1+Corinthians+11%3A23-26">1 Corinthians 11:23–26</BibleLink>;{' '}
          <BibleLink q="Luke+22%3A19">Luke 22:19</BibleLink>
        </Statement>
        <Statement num="109">
          The local church is to be led by qualified elders/pastors and served by deacons.{' '}
          <BibleLink q="1+Timothy+3%3A1-13">1 Timothy 3:1–13</BibleLink>;{' '}
          <BibleLink q="Titus+1%3A5-9">Titus 1:5–9</BibleLink>
        </Statement>
        <Statement num="110">
          Elders are to shepherd, teach, and oversee the flock.{' '}
          <BibleLink q="1+Peter+5%3A1-4">1 Peter 5:1–4</BibleLink>;{' '}
          <BibleLink q="Acts+20%3A28">Acts 20:28</BibleLink>
        </Statement>
        <Statement num="111">
          Deacons are to serve the practical needs of the church.{' '}
          <BibleLink q="Acts+6%3A1-6">Acts 6:1–6</BibleLink>;{' '}
          <BibleLink q="1+Timothy+3%3A8-13">1 Timothy 3:8–13</BibleLink>
        </Statement>
        <Statement num="112">
          The church is called to exercise discipline for the purity of the body.{' '}
          <BibleLink q="Matthew+18%3A15-17">Matthew 18:15–17</BibleLink>;{' '}
          <BibleLink q="1+Corinthians+5%3A1-13">1 Corinthians 5:1–13</BibleLink>
        </Statement>
        <Statement num="113">
          Church discipline is always to be done in love with the goal of restoration.{' '}
          <BibleLink q="Galatians+6%3A1">Galatians 6:1</BibleLink>;{' '}
          <BibleLink q="2+Corinthians+2%3A6-8">2 Corinthians 2:6–8</BibleLink>
        </Statement>
        <Statement num="114">
          Every believer is gifted by the Holy Spirit to serve the body of Christ.{' '}
          <BibleLink q="1+Corinthians+12%3A4-7">1 Corinthians 12:4–7</BibleLink>;{' '}
          <BibleLink q="Romans+12%3A4-8">Romans 12:4–8</BibleLink>
        </Statement>
        <Statement num="115">
          The gifts of the Spirit are to be used for the edification of the church.{' '}
          <BibleLink q="1+Corinthians+14%3A12">1 Corinthians 14:12</BibleLink>;{' '}
          <BibleLink q="Ephesians+4%3A12">Ephesians 4:12</BibleLink>
        </Statement>
        <Statement num="116">
          Sign gifts like tongues, prophecy, and miraculous healings served foundational purposes.{' '}
          <BibleLink q="Hebrews+2%3A3-4">Hebrews 2:3–4</BibleLink>;{' '}
          <BibleLink q="2+Corinthians+12%3A12">2 Corinthians 12:12</BibleLink>
        </Statement>
        <Statement num="117">
          Spiritual sign-gifts like tongues and miracles have ceased.{' '}
          <BibleLink q="1+Corinthians+13%3A8-12">1 Corinthians 13:8–12</BibleLink>
        </Statement>
        <Statement num="118">
          God still heals today according to His sovereign will.{' '}
          <BibleLink q="James+5%3A14-15">James 5:14–15</BibleLink>
        </Statement>
        <Statement num="119">
          The church is to be united in doctrine and love.{' '}
          <BibleLink q="Ephesians+4%3A3-6">Ephesians 4:3–6</BibleLink>;{' '}
          <BibleLink q="John+17%3A21">John 17:21</BibleLink>
        </Statement>
        <Statement num="120">
          Unity does not mean uniformity but agreement on essential doctrines.{' '}
          <BibleLink q="Romans+14%3A1-12">Romans 14:1–12</BibleLink>;{' '}
          <BibleLink q="1+Corinthians+1%3A10">1 Corinthians 1:10</BibleLink>
        </Statement>
        <Statement num="121">
          The church is to pursue holiness and separate from false teaching.{' '}
          <BibleLink q="2+Timothy+2%3A19">2 Timothy 2:19</BibleLink>;{' '}
          <BibleLink q="Titus+3%3A10">Titus 3:10</BibleLink>
        </Statement>
        <Statement num="122">
          The church is to be generous in giving.{' '}
          <BibleLink q="2+Corinthians+9%3A6-7">2 Corinthians 9:6–7</BibleLink>;{' '}
          <BibleLink q="Acts+4%3A32-35">Acts 4:32–35</BibleLink>
        </Statement>
        <Statement num="123">
          Giving is an act of worship and stewardship.{' '}
          <BibleLink q="2+Corinthians+8%3A1-5">2 Corinthians 8:1–5</BibleLink>;{' '}
          <BibleLink q="1+Chronicles+29%3A14">1 Chronicles 29:14</BibleLink>
        </Statement>
        <Statement num="124">
          The church is to care for the poor, widows, and orphans.{' '}
          <BibleLink q="James+1%3A27">James 1:27</BibleLink>;{' '}
          <BibleLink q="Galatians+2%3A10">Galatians 2:10</BibleLink>
        </Statement>
        <Statement num="125">
          The church exists for the glory of God.{' '}
          <BibleLink q="Ephesians+3%3A21">Ephesians 3:21</BibleLink>;{' '}
          <BibleLink q="1+Peter+4%3A11">1 Peter 4:11</BibleLink>
        </Statement>
        <Statement num="126">
          The church is the pillar and ground of the truth.{' '}
          <BibleLink q="1+Timothy+3%3A15">1 Timothy 3:15</BibleLink>
        </Statement>
        <Statement num="127">
          The church is called to make disciples of all nations.{' '}
          <BibleLink q="Matthew+28%3A19-20">Matthew 28:19–20</BibleLink>;{' '}
          <BibleLink q="Acts+1%3A8">Acts 1:8</BibleLink>
        </Statement>
        <Statement num="128">
          Missions is central to the church&apos;s calling.{' '}
          <BibleLink q="Romans+10%3A14-15">Romans 10:14–15</BibleLink>
        </Statement>
        <Statement num="129">
          The church is to pray without ceasing.{' '}
          <BibleLink q="1+Thessalonians+5%3A17">1 Thessalonians 5:17</BibleLink>;{' '}
          <BibleLink q="Ephesians+6%3A18">Ephesians 6:18</BibleLink>
        </Statement>
        <Statement num="130">
          Corporate worship is essential to the life of the church.{' '}
          <BibleLink q="Hebrews+10%3A24-25">Hebrews 10:24–25</BibleLink>;{' '}
          <BibleLink q="Colossians+3%3A16">Colossians 3:16</BibleLink>
        </Statement>
        <Statement num="131">
          Preaching and teaching the Word is central to worship.{' '}
          <BibleLink q="2+Timothy+4%3A2">2 Timothy 4:2</BibleLink>;{' '}
          <BibleLink q="Acts+2%3A42">Acts 2:42</BibleLink>
        </Statement>
        <Statement num="132">
          Singing is a means of worship and edification.{' '}
          <BibleLink q="Ephesians+5%3A19">Ephesians 5:19</BibleLink>;{' '}
          <BibleLink q="Colossians+3%3A16">Colossians 3:16</BibleLink>
        </Statement>
        <Statement num="133">
          The church is to submit to governing authorities as instituted by God.{' '}
          <BibleLink q="Romans+13%3A1-7">Romans 13:1–7</BibleLink>;{' '}
          <BibleLink q="1+Peter+2%3A13-17">1 Peter 2:13–17</BibleLink>
        </Statement>
        <Statement num="134">
          The church must obey God rather than men when there is conflict.{' '}
          <BibleLink q="Acts+5%3A29">Acts 5:29</BibleLink>
        </Statement>
        <Statement num="135">
          Marriage is between one man and one woman.{' '}
          <BibleLink q="Genesis+2%3A24">Genesis 2:24</BibleLink>;{' '}
          <BibleLink q="Matthew+19%3A4-6">Matthew 19:4–6</BibleLink>
        </Statement>
        <Statement num="136">
          Sexual intimacy is reserved for marriage.{' '}
          <BibleLink q="Hebrews+13%3A4">Hebrews 13:4</BibleLink>;{' '}
          <BibleLink q="1+Corinthians+6%3A18-20">1 Corinthians 6:18–20</BibleLink>
        </Statement>
        <Statement num="137">
          Divorce is permitted only for sexual immorality or abandonment by an unbeliever.{' '}
          <BibleLink q="Matthew+19%3A9">Matthew 19:9</BibleLink>;{' '}
          <BibleLink q="1+Corinthians+7%3A15">1 Corinthians 7:15</BibleLink>
        </Statement>
        <Statement num="138">
          Children are a blessing from the Lord.{' '}
          <BibleLink q="Psalm+127%3A3">Psalm 127:3</BibleLink>
        </Statement>
        <Statement num="139">
          Parents are to raise their children in the discipline and instruction of the Lord.{' '}
          <BibleLink q="Ephesians+6%3A4">Ephesians 6:4</BibleLink>;{' '}
          <BibleLink q="Deuteronomy+6%3A6-7">Deuteronomy 6:6–7</BibleLink>
        </Statement>
      </div>
    </div>
  )
}
