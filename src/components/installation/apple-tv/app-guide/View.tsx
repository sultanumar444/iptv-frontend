import PageTitleBar from "@/components/PageTitleBar";
import AppleTvAppGuideDeviceSelector from "./DeviceSelector";
import AppleTvAppGuideInstructions from "./Instructions";
import AppleTvAppGuideSpecs from "./Specs";
import AppleTvAppGuideDownloadSection from "./DownloadSection";
import AppleTvAppGuideSteps from "./Steps";
import AppleTvAppGuideDeviceBlurbs from "./DeviceBlurbs";
import AppleTvAppGuideDeviceCompat from "./DeviceCompat";
import AppleTvAppGuideSpecsCompact from "./SpecsCompact";
import AppleTvAppGuideFaq from "./Faq";
import AppleTvAppGuideInfoSection from "./InfoSection";
import AppleTvAppGuideVariantSection from "./VariantSection";
import type { AppleTvAppGuide } from "@/content/apple-tv/apps";

/**
 * Delad vy för en app-guide under Installationsguider → Apple TV → [app].
 * Varje app har sin egen sida (t.ex. iptvx/page.tsx) som importerar sitt
 * eget innehåll från src/content/apple-tv-apps/ och renderar det med denna
 * komponent. Alla avsnitt nedan är valfria — sidan visar bara det som
 * finns ifyllt i appens innehållsfil.
 */
export default function AppleTvAppGuideView({
  guide,
}: {
  guide: AppleTvAppGuide;
}) {
  const hasSpecs = !!(guide.specsImage && guide.specs);

  return (
    <>
      <PageTitleBar
        title={guide.pageTitle}
        description={guide.pageDescription}
        ctaLabel={guide.pageCtaLabel}
        ctaHref={guide.pageCtaHref}
        scrollHint={guide.pageScrollHint}
      />
      {guide.topStepsSection && (
        <div className="pt-6 sm:pt-10">
          {guide.topStepsSection.heading && (
            <div className="mx-auto max-w-7xl px-6 pb-8 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                {guide.topStepsSection.heading}
              </h2>
            </div>
          )}
          <AppleTvAppGuideSteps
            steps={guide.topStepsSection.steps}
            columns={guide.topStepsSection.columns ?? 3}
            imageAspect="landscape"
          />
        </div>
      )}
      <div className="pt-6 pb-20 sm:pt-10 sm:pb-28">
        <AppleTvAppGuideDeviceSelector
          heading={guide.selectorHeading}
          devices={guide.deviceTabs}
        />
        <AppleTvAppGuideInstructions
          heading={guide.instructionsHeading}
          intro={guide.instructionsIntro}
          downloadLinks={guide.instructionsDownloadLinks}
          uploadMethodsIntro={guide.uploadMethodsIntro}
          uploadMethods={guide.uploadMethods}
          body={guide.instructionsBody}
        />

        {guide.variantSections?.map((variant) => (
          <AppleTvAppGuideVariantSection
            key={variant.heading}
            heading={variant.heading}
            body={variant.body}
            image={variant.image}
            imagePosition={variant.imagePosition}
          />
        ))}

        {(hasSpecs || guide.downloadSection) && (
          <section className="mx-auto max-w-7xl px-6 py-8">
            <div className="space-y-6">
              {hasSpecs && (
                <AppleTvAppGuideSpecs
                  image={guide.specsImage!}
                  specs={guide.specs!}
                  warning={guide.specsWarning}
                  smallImage={guide.specsSmallImage}
                />
              )}
              {guide.downloadSection && (
                <AppleTvAppGuideDownloadSection
                  heading={guide.downloadSection.heading}
                  introBeforeDownload={guide.downloadSection.introBeforeDownload}
                  downloadLabel={guide.downloadSection.downloadLabel}
                  downloadHref={guide.downloadSection.downloadHref}
                  introAfterDownload={guide.downloadSection.introAfterDownload}
                  recommendationsIntro={guide.downloadSection.recommendationsIntro}
                  recommendations={guide.downloadSection.recommendations}
                  closingParagraphs={guide.downloadSection.closingParagraphs}
                />
              )}
            </div>
          </section>
        )}

        {guide.deviceCompatSection && (
          <AppleTvAppGuideDeviceCompat
            heading={guide.deviceCompatSection.heading}
            devices={guide.deviceCompatSection.devices}
          />
        )}

        {guide.stepSections?.map((section, i) => (
          <div key={i}>
            {section.heading && (
              <div
                id={section.id}
                className="mx-auto max-w-7xl px-6 pt-8 scroll-mt-24 text-center"
              >
                <h2 className="text-3xl font-bold sm:text-4xl">
                  {section.heading}
                </h2>
              </div>
            )}
            <AppleTvAppGuideSteps
              id={section.heading ? undefined : section.id}
              steps={section.steps}
              columns={section.columns ?? 2}
              imageAspect="landscape"
            />
          </div>
        ))}

        {guide.mobileSection && (
          <div id={guide.mobileSection.id} className="scroll-mt-24">
            <AppleTvAppGuideDeviceBlurbs devices={guide.mobileSection.devices} />

            <section className="mx-auto max-w-7xl px-6 py-8">
              <AppleTvAppGuideSpecsCompact
                image={guide.mobileSection.specsImage}
                specs={guide.mobileSection.specs}
                layout={guide.mobileSection.specsLayout}
                card={guide.mobileSection.specsCard}
              />
            </section>

            <div className="mx-auto max-w-7xl px-6 pt-8 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                {guide.mobileSection.instructionsHeading}
              </h2>
            </div>

            <AppleTvAppGuideSteps
              id="mobil-steg"
              steps={guide.mobileSection.steps}
              columns={guide.mobileSection.stepsColumns ?? 4}
              imageAspect="portrait"
              numberLayout={guide.mobileSection.stepsNumberLayout ?? "row"}
              portraitAspectClass={guide.mobileSection.stepsPortraitAspectClass}
              gapClass={guide.mobileSection.stepsGapClass}
              portraitMaxWidthClass={guide.mobileSection.stepsPortraitMaxWidthClass}
            />
          </div>
        )}

        {guide.faqSection && (
          <AppleTvAppGuideFaq
            heading={guide.faqSection.heading}
            items={guide.faqSection.items}
            ctaLabel={guide.faqSection.ctaLabel}
            ctaHref={guide.faqSection.ctaHref}
          />
        )}
        {guide.infoSection && (
          <AppleTvAppGuideInfoSection
            blocks={guide.infoSection.blocks}
            ctaLabel={guide.infoSection.ctaLabel}
            ctaHref={guide.infoSection.ctaHref}
            layout={guide.infoSection.layout}
          />
        )}
      </div>
    </>
  );
}
