<template>
  <div class="websiteContainer">
    <IntroductionSection />
    <PortfolioSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script>
import IntroductionSection from "@/components/bodySections/IntroductionSection.vue";
import PortfolioSection from "@/components/bodySections/PortfolioSection.vue";
import FooterSection from "@/components/footer/FooterSection.vue";
import ContactSection from "../components/bodySections/ContactSection.vue";
export default {
  name: "HomeView",
  components: {
    IntroductionSection,
    PortfolioSection,
    FooterSection,
    ContactSection,
  },
};
</script>
