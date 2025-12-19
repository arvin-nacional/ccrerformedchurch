import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { HeroBlock } from '@/blocks/Hero/Component'
import { AboutSectionBlock } from '@/blocks/AboutSection/Component'
import { StatementOfFaithBlock } from '@/blocks/StatementOfFaith/Component'
import { AboutChurchBlock } from '@/blocks/AboutChurch/Component'
import { OurVisionBlock } from '@/blocks/OurVision/Component'
import { OurStrategyBlock } from '@/blocks/OurStrategy/Component'
import { OurMissionBlock } from '@/blocks/MissionBlock/Component'
import { KnowTheWordBlock } from '@/blocks/KnowTheWord/Component'
import { TheologicalSchoolBlock } from '@/blocks/TheologicalSchool/Component'
import { CoursesOfferedBlock } from '@/blocks/CoursesOffered/Component'
import { LiveOutTheWordBlock } from '@/blocks/LiveOutTheWord/Component'
import { ProclaimTheWordBlock } from '@/blocks/ProclaimTheWord/Component'
import { GospelOfSalvationBlock } from '@/blocks/GospelOfSalvation/Component'
import { RecentSermonsBlock } from '@/blocks/RecentSermons/Component'
import { RecentThinkingBiblicallyBlock } from '@/blocks/RecentThinkingBiblically/Component'
import { EventsAnnouncementsBlock } from '@/blocks/EventsAnnouncements/Component'
import { ContactUsBlock } from '@/blocks/ContactUs/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  hero: HeroBlock,
  aboutSection: AboutSectionBlock,
  statementOfFaith: StatementOfFaithBlock,
  aboutChurch: AboutChurchBlock,
  ourVision: OurVisionBlock,
  ourStrategy: OurStrategyBlock,
  ourMission: OurMissionBlock,
  knowTheWord: KnowTheWordBlock,
  theologicalSchool: TheologicalSchoolBlock,
  coursesOffered: CoursesOfferedBlock,
  liveOutTheWord: LiveOutTheWordBlock,
  proclaimTheWord: ProclaimTheWordBlock,
  gospelOfSalvation: GospelOfSalvationBlock,
  recentSermons: RecentSermonsBlock,
  recentThinkingBiblically: RecentThinkingBiblicallyBlock,
  eventsAnnouncements: EventsAnnouncementsBlock,
  contactUs: ContactUsBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
