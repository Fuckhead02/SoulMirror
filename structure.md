soulmirror/
│
├── public/
│   ├── index.html                                    # HTML shell with preload directives
│   ├── favicon.ico                                   # Multi-size favicon
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png                          # iOS home screen icon
│   ├── android-chrome-192x192.png                    # Android icon
│   ├── android-chrome-512x512.png
│   ├── manifest.json                                 # PWA manifest with all icons
│   ├── robots.txt                                    # SEO crawler directives
│   ├── sitemap.xml                                   # Dynamic sitemap
│   ├── _redirects                                    # Hosting redirects
│   ├── _headers                                      # Security headers
│   ├── sw.js                                         # Service worker (workbox)
│   ├── offline.html                                  # Offline fallback page
│   │
│   ├── fonts/
│   │   ├── Cinzel/
│   │   │   ├── Cinzel-Regular.woff2
│   │   │   ├── Cinzel-Medium.woff2
│   │   │   ├── Cinzel-SemiBold.woff2
│   │   │   ├── Cinzel-Bold.woff2
│   │   │   └── Cinzel-ExtraBold.woff2
│   │   ├── CrimsonPro/
│   │   │   ├── CrimsonPro-Light.woff2
│   │   │   ├── CrimsonPro-LightItalic.woff2
│   │   │   ├── CrimsonPro-Regular.woff2
│   │   │   ├── CrimsonPro-Italic.woff2
│   │   │   ├── CrimsonPro-SemiBold.woff2
│   │   │   ├── CrimsonPro-SemiBoldItalic.woff2
│   │   │   ├── CrimsonPro-Bold.woff2
│   │   │   └── CrimsonPro-BoldItalic.woff2
│   │   ├── Inter/
│   │   │   ├── Inter-Light.woff2
│   │   │   ├── Inter-Regular.woff2
│   │   │   ├── Inter-Medium.woff2
│   │   │   └── Inter-SemiBold.woff2
│   │   └── PlayfairDisplay/
│   │       ├── PlayfairDisplay-Regular.woff2
│   │       ├── PlayfairDisplay-Italic.woff2
│   │       └── PlayfairDisplay-Bold.woff2
│   │
│   ├── images/
│   │   ├── og/
│   │   │   ├── og-default.png                        # Default social preview
│   │   │   ├── og-stoic.png                          # Stoic guide preview
│   │   │   ├── og-nurturing.png                      # Nurturing guide preview
│   │   │   ├── og-coach.png                          # Coach guide preview
│   │   │   ├── og-astrologer.png                     # Astrologer preview
│   │   │   ├── og-alchemist.png                      # Alchemist preview
│   │   │   └── og-poet.png                           # Poet preview
│   │   │
│   │   ├── logo/
│   │   │   ├── soulmirror-logo.svg                   # Full color logo
│   │   │   ├── soulmirror-logo-dark.svg              # Dark mode logo
│   │   │   ├── soulmirror-logo-light.svg             # Light mode logo
│   │   │   ├── soulmirror-icon.svg                   # Icon only
│   │   │   ├── soulmirror-wordmark.svg               # Text only
│   │   │   └── soulmirror-monogram.svg               # SM monogram
│   │   │
│   │   ├── chambers/
│   │   │   ├── stoic/
│   │   │   │   ├── courtyard-dawn.webp               # Dawn version
│   │   │   │   ├── courtyard-noon.webp               # Noon version
│   │   │   │   ├── courtyard-dusk.webp               # Dusk version
│   │   │   │   ├── courtyard-night.webp              # Night version
│   │   │   │   ├── olive-tree.webp                   # Central tree
│   │   │   │   ├── reflecting-pool.webp              # Pool detail
│   │   │   │   └── marble-columns.webp               # Columns detail
│   │   │   │
│   │   │   ├── nurturing/
│   │   │   │   ├── cottage-day.webp
│   │   │   │   ├── cottage-twilight.webp
│   │   │   │   ├── cottage-night.webp
│   │   │   │   ├── hearth-fire.webp
│   │   │   │   ├── armchair.webp
│   │   │   │   └── knitted-blanket.webp
│   │   │   │
│   │   │   ├── coach/
│   │   │   │   ├── forge-day.webp
│   │   │   │   ├── forge-midnight.webp
│   │   │   │   ├── forge-fire.webp
│   │   │   │   ├── anvil.webp
│   │   │   │   ├── hammer.webp
│   │   │   │   └── sparks.webp
│   │   │   │
│   │   │   ├── astrologer/
│   │   │   │   ├── observatory.webp
│   │   │   │   ├── nebula-blue.webp
│   │   │   │   ├── nebula-purple.webp
│   │   │   │   ├── constellation-map.webp
│   │   │   │   ├── planet-orbit.webp
│   │   │   │   └── starlight-beams.webp
│   │   │   │
│   │   │   ├── alchemist/
│   │   │   │   ├── cave-entrance.webp
│   │   │   │   ├── cave-interior.webp
│   │   │   │   ├── single-flame.webp
│   │   │   │   ├── wall-masks.webp
│   │   │   │   ├── spiral-staircase.webp
│   │   │   │   └── raw-gold-ore.webp
│   │   │   │
│   │   │   └── poet/
│   │   │       ├── garden-dusk.webp
│   │   │       ├── garden-night.webp
│   │   │       ├── rose-bloom.webp
│   │   │       ├── fountain.webp
│   │   │       ├── nightingale.webp
│   │   │       └── cypress-tree.webp
│   │   │
│   │   ├── symbols/
│   │   │   ├── stoic-column.svg
│   │   │   ├── stoic-column-gold.svg
│   │   │   ├── nurturing-flame.svg
│   │   │   ├── nurturing-flame-rose.svg
│   │   │   ├── coach-anvil.svg
│   │   │   ├── coach-anvil-orange.svg
│   │   │   ├── astrologer-star.svg
│   │   │   ├── astrologer-star-indigo.svg
│   │   │   ├── alchemist-ouroboros.svg
│   │   │   ├── alchemist-ouroboros-gold.svg
│   │   │   ├── poet-rose.svg
│   │   │   ├── poet-rose-pink.svg
│   │   │   ├── council-mirror.svg
│   │   │   └── council-mirror-multi.svg
│   │   │
│   │   ├── zodiac/
│   │   │   ├── symbols/
│   │   │   │   ├── aries.svg
│   │   │   │   ├── taurus.svg
│   │   │   │   ├── gemini.svg
│   │   │   │   ├── cancer.svg
│   │   │   │   ├── leo.svg
│   │   │   │   ├── virgo.svg
│   │   │   │   ├── libra.svg
│   │   │   │   ├── scorpio.svg
│   │   │   │   ├── sagittarius.svg
│   │   │   │   ├── capricorn.svg
│   │   │   │   ├── aquarius.svg
│   │   │   │   └── pisces.svg
│   │   │   ├── constellations/
│   │   │   │   ├── aries-constellation.svg
│   │   │   │   ├── taurus-constellation.svg
│   │   │   │   ├── gemini-constellation.svg
│   │   │   │   ├── cancer-constellation.svg
│   │   │   │   ├── leo-constellation.svg
│   │   │   │   ├── virgo-constellation.svg
│   │   │   │   ├── libra-constellation.svg
│   │   │   │   ├── scorpio-constellation.svg
│   │   │   │   ├── sagittarius-constellation.svg
│   │   │   │   ├── capricorn-constellation.svg
│   │   │   │   ├── aquarius-constellation.svg
│   │   │   │   └── pisces-constellation.svg
│   │   │   └── elements/
│   │   │       ├── fire.svg
│   │   │       ├── earth.svg
│   │   │       ├── air.svg
│   │   │       └── water.svg
│   │   │
│   │   ├── moon-phases/
│   │   │   ├── new-moon.svg
│   │   │   ├── waxing-crescent.svg
│   │   │   ├── first-quarter.svg
│   │   │   ├── waxing-gibbous.svg
│   │   │   ├── full-moon.svg
│   │   │   ├── waning-gibbous.svg
│   │   │   ├── last-quarter.svg
│   │   │   ├── waning-crescent.svg
│   │   │   └── moon-phase-wheel.svg
│   │   │
│   │   ├── planets/
│   │   │   ├── sun.svg
│   │   │   ├── moon.svg
│   │   │   ├── mercury.svg
│   │   │   ├── venus.svg
│   │   │   ├── mars.svg
│   │   │   ├── jupiter.svg
│   │   │   ├── saturn.svg
│   │   │   ├── uranus.svg
│   │   │   ├── neptune.svg
│   │   │   └── pluto.svg
│   │   │
│   │   ├── alchemy/
│   │   │   ├── prima-materia.svg
│   │   │   ├── philosophers-stone.svg
│   │   │   ├── solve-et-coagula.svg
│   │   │   ├── nigredo.svg
│   │   │   ├── albedo.svg
│   │   │   ├── citrinitas.svg
│   │   │   └── rubedo.svg
│   │   │
│   │   └── misc/
│   │       ├── sparkle.png
│   │       ├── stardust.png
│   │       ├── glow-ring.png
│   │       ├── vignette.png
│   │       └── noise-texture.png
│   │
│   ├── audio/
│   │   ├── ambient/
│   │   │   ├── stoic-waves.mp3
│   │   │   ├── stoic-waves.ogg
│   │   │   ├── nurturing-hearth.mp3
│   │   │   ├── nurturing-hearth.ogg
│   │   │   ├── coach-forge.mp3
│   │   │   ├── coach-forge.ogg
│   │   │   ├── astrologer-spheres.mp3
│   │   │   ├── astrologer-spheres.ogg
│   │   │   ├── alchemist-drips.mp3
│   │   │   ├── alchemist-drips.ogg
│   │   │   ├── poet-nightingale.mp3
│   │   │   ├── poet-nightingale.ogg
│   │   │   ├── hall-cosmic-hum.mp3
│   │   │   └── hall-cosmic-hum.ogg
│   │   │
│   │   ├── ui/
│   │   │   ├── doorway-open.mp3
│   │   │   ├── doorway-close.mp3
│   │   │   ├── message-send.mp3
│   │   │   ├── message-receive.mp3
│   │   │   ├── mirror-pulse.mp3
│   │   │   ├── council-convene.mp3
│   │   │   ├── synthesis-complete.mp3
│   │   │   ├── journal-page-turn.mp3
│   │   │   ├── practice-complete.mp3
│   │   │   └── crisis-alert.mp3
│   │   │
│   │   └── music/
│   │       ├── arrival-theme.mp3
│   │       ├── hall-theme.mp3
│   │       ├── synthesis-theme.mp3
│   │       └── journal-theme.mp3
│   │
│   ├── locales/
│   │   ├── en/
│   │   │   ├── common.json
│   │   │   ├── arrival.json
│   │   │   ├── onboarding.json
│   │   │   ├── hall.json
│   │   │   ├── chambers.json
│   │   │   ├── guides/
│   │   │   │   ├── stoic.json
│   │   │   │   ├── nurturing.json
│   │   │   │   ├── coach.json
│   │   │   │   ├── astrologer.json
│   │   │   │   ├── alchemist.json
│   │   │   │   └── poet.json
│   │   │   ├── mirror.json
│   │   │   ├── journal.json
│   │   │   ├── crisis.json
│   │   │   ├── zodiac.json
│   │   │   ├── practices.json
│   │   │   └── errors.json
│   │   ├── es/ (same structure)
│   │   ├── fr/ (same structure)
│   │   ├── de/ (same structure)
│   │   ├── it/ (same structure)
│   │   ├── pt/ (same structure)
│   │   ├── ar/ (same structure, RTL)
│   │   ├── hi/ (same structure)
│   │   ├── ja/ (same structure)
│   │   ├── zh/ (same structure)
│   │   └── ko/ (same structure)
│   │
│   └── models/                                     # 3D models (glTF/GLB)
│       ├── mirror-frame.glb
│       ├── stoic-bust.glb
│       ├── olive-tree.glb
│       ├── hearth-fire.glb
│       ├── anvil.glb
│       ├── celestial-sphere.glb
│       ├── ouroboros.glb
│       └── rose-bloom.glb
│
├── src/
│   ├── index.js                                    # ReactDOM.createRoot entry
│   ├── index.css                                   # Global styles + Tailwind
│   ├── App.jsx                                     # Root component
│   ├── App.css
│   ├── App.test.jsx
│   ├── serviceWorkerRegistration.js
│   ├── service-worker.js
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   │
│   ├── config/
│   │   ├── constants.js                            # App-wide magic numbers/strings
│   │   ├── routes.js                               # All route path definitions
│   │   ├── api.js                                  # API base URLs & endpoints
│   │   ├── environment.js                          # Environment variable mapping
│   │   ├── theme.js                                # Theme color definitions
│   │   ├── breakpoints.js                          # Responsive breakpoint definitions
│   │   ├── animations.js                           # Global animation presets
│   │   ├── guides.js                               # Guide configuration registry
│   │   ├── chambers.js                             # Chamber configuration registry
│   │   ├── zodiac.js                               # Zodiac configuration
│   │   ├── moonPhases.js                           # Moon phase configuration
│   │   └── crisis.js                               # Crisis protocol configuration
│   │
│   ├── components/
│   │   │
│   │   ├── core/                                   # Foundational components
│   │   │   ├── Starfield/
│   │   │   │   ├── Starfield.jsx
│   │   │   │   ├── Starfield.css
│   │   │   │   ├── Starfield.test.jsx
│   │   │   │   ├── Starfield.types.js
│   │   │   │   ├── StarfieldWorker.js              # Web Worker for star calculations
│   │   │   │   ├── StarfieldWorker.worker.js
│   │   │   │   ├── shaders/
│   │   │   │   │   ├── star.vert                    # Vertex shader
│   │   │   │   │   ├── star.frag                    # Fragment shader
│   │   │   │   │   ├── nebula.vert
│   │   │   │   │   └── nebula.frag
│   │   │   │   └── presets/
│   │   │   │       ├── deepSpace.js
│   │   │   │       ├── nebulaField.js
│   │   │   │       └── cosmicDust.js
│   │   │   │
│   │   │   ├── ParticleSystem/
│   │   │   │   ├── ParticleSystem.jsx
│   │   │   │   ├── ParticleSystem.css
│   │   │   │   ├── ParticleEmitter.js
│   │   │   │   ├── ParticleBehaviors.js
│   │   │   │   └── presets/
│   │   │   │       ├── sparkles.js
│   │   │   │       ├── stardust.js
│   │   │   │       ├── embers.js
│   │   │   │       └── rosePetals.js
│   │   │   │
│   │   │   ├── CosmicBackground/
│   │   │   │   ├── CosmicBackground.jsx
│   │   │   │   ├── CosmicBackground.css
│   │   │   │   └── CosmicBackground.test.jsx
│   │   │   │
│   │   │   ├── ErrorBoundary/
│   │   │   │   ├── ErrorBoundary.jsx
│   │   │   │   ├── ErrorFallback.jsx
│   │   │   │   └── ErrorBoundary.test.jsx
│   │   │   │
│   │   │   ├── SuspenseFallback/
│   │   │   │   ├── SuspenseFallback.jsx
│   │   │   │   └── SuspenseFallback.css
│   │   │   │
│   │   │   ├── Portal/
│   │   │   │   └── Portal.jsx
│   │   │   │
│   │   │   ├── LazyLoad/
│   │   │   │   └── LazyLoad.jsx
│   │   │   │
│   │   │   ├── SEO/
│   │   │   │   ├── SEO.jsx
│   │   │   │   └── SEO.test.jsx
│   │   │   │
│   │   │   ├── Analytics/
│   │   │   │   ├── Analytics.jsx
│   │   │   │   ├── trackEvent.js
│   │   │   │   └── events.js
│   │   │   │
│   │   │   └── Accessibility/
│   │   │       ├── SkipLink.jsx
│   │   │       ├── ScreenReaderOnly.jsx
│   │   │       └── FocusTrap.jsx
│   │   │
│   │   ├── layout/                                 # Layout components
│   │   │   ├── AppLayout/
│   │   │   │   ├── AppLayout.jsx
│   │   │   │   └── AppLayout.css
│   │   │   ├── ChamberLayout/
│   │   │   │   ├── ChamberLayout.jsx
│   │   │   │   └── ChamberLayout.css
│   │   │   ├── Navigation/
│   │   │   │   ├── MobileNav.jsx
│   │   │   │   ├── MobileNav.css
│   │   │   │   ├── DesktopNav.jsx
│   │   │   │   ├── DesktopNav.css
│   │   │   │   ├── NavigationContext.jsx
│   │   │   │   └── useNavigation.js
│   │   │   ├── Header/
│   │   │   │   ├── Header.jsx
│   │   │   │   └── Header.css
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── Footer.css
│   │   │   ├── Sidebar/
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   ├── Sidebar.css
│   │   │   │   └── SidebarContext.jsx
│   │   │   ├── BottomSheet/
│   │   │   │   ├── BottomSheet.jsx
│   │   │   │   └── BottomSheet.css
│   │   │   ├── Breadcrumbs/
│   │   │   │   └── Breadcrumbs.jsx
│   │   │   └── PageTransition/
│   │   │       ├── PageTransition.jsx
│   │   │       └── PageTransition.css
│   │   │
│   │   ├── arrival/                                # Arrival experience
│   │   │   ├── Arrival/
│   │   │   │   ├── Arrival.jsx
│   │   │   │   ├── Arrival.css
│   │   │   │   └── Arrival.test.jsx
│   │   │   ├── CosmicTitle/
│   │   │   │   ├── CosmicTitle.jsx
│   │   │   │   └── CosmicTitle.css
│   │   │   ├── WelcomeMessage/
│   │   │   │   ├── WelcomeMessage.jsx
│   │   │   │   └── WelcomeMessage.css
│   │   │   ├── EnterButton/
│   │   │   │   ├── EnterButton.jsx
│   │   │   │   └── EnterButton.css
│   │   │   ├── ConstellationHint/
│   │   │   │   └── ConstellationHint.jsx
│   │   │   └── ArrivalOrchestrator/
│   │   │       └── ArrivalOrchestrator.jsx          # Times all arrival animations
│   │   │
│   │   ├── onboarding/                             # Sacred onboarding
│   │   │   ├── Onboarding/
│   │   │   │   ├── Onboarding.jsx
│   │   │   │   ├── Onboarding.css
│   │   │   │   └── Onboarding.test.jsx
│   │   │   ├── OnboardingProgress/
│   │   │   │   ├── OnboardingProgress.jsx
│   │   │   │   └── OnboardingProgress.css
│   │   │   ├── StepFirstKey/
│   │   │   │   ├── StepFirstKey.jsx
│   │   │   │   ├── StepFirstKey.css
│   │   │   │   ├── BirthDateInput.jsx
│   │   │   │   ├── BirthTimeInput.jsx
│   │   │   │   ├── BirthPlaceInput.jsx
│   │   │   │   └── BirthChartPreview.jsx
│   │   │   ├── StepSecondKey/
│   │   │   │   ├── StepSecondKey.jsx
│   │   │   │   ├── StepSecondKey.css
│   │   │   │   ├── SoulSeasonCards.jsx
│   │   │   │   └── SeasonDescription.jsx
│   │   │   ├── StepThirdKey/
│   │   │   │   ├── StepThirdKey.jsx
│   │   │   │   ├── StepThirdKey.css
│   │   │   │   └── BurningQuestionInput.jsx
│   │   │   ├── OnboardingComplete/
│   │   │   │   ├── OnboardingComplete.jsx
│   │   │   │   └── OnboardingComplete.css
│   │   │   └── OnboardingValidator/
│   │   │       └── OnboardingValidator.js           # Form validation logic
│   │   │
│   │   ├── hall/                                   # Great Hall of Mirrors
│   │   │   ├── GreatHall/
│   │   │   │   ├── GreatHall.jsx
│   │   │   │   ├── GreatHall.css
│   │   │   │   └── GreatHall.test.jsx
│   │   │   ├── GreatMirror/
│   │   │   │   ├── GreatMirror.jsx
│   │   │   │   ├── GreatMirror.css
│   │   │   │   ├── MirrorReflection.jsx
│   │   │   │   ├── MirrorFrame.jsx
│   │   │   │   ├── MirrorParticles.jsx
│   │   │   │   └── MirrorContext.jsx
│   │   │   ├── ChamberDoorway/
│   │   │   │   ├── ChamberDoorway.jsx
│   │   │   │   ├── ChamberDoorway.css
│   │   │   │   ├── DoorwayGlow.jsx
│   │   │   │   ├── DoorwaySymbol.jsx
│   │   │   │   └── DoorwayHover.jsx
│   │   │   ├── HallEnvironment/
│   │   │   │   ├── HallFloor.jsx
│   │   │   │   ├── ConstellationCeiling.jsx
│   │   │   │   ├── AmbientLighting.jsx
│   │   │   │   └── HallAudio.jsx
│   │   │   ├── EmotionalWeather/
│   │   │   │   ├── EmotionalWeather.jsx
│   │   │   │   └── EmotionalWeather.css
│   │   │   ├── HallNavigation/
│   │   │   │   └── HallNavigation.jsx
│   │   │   └── HallOrchestrator/
│   │   │       └── HallOrchestrator.jsx
│   │   │
│   │   ├── chamber/                                # Chamber experience (shared)
│   │   │   ├── Chamber/
│   │   │   │   ├── Chamber.jsx
│   │   │   │   ├── Chamber.css
│   │   │   │   └── Chamber.test.jsx
│   │   │   ├── ChamberHeader/
│   │   │   │   ├── ChamberHeader.jsx
│   │   │   │   ├── ChamberHeader.css
│   │   │   │   ├── GuideInfo.jsx
│   │   │   │   └── ChamberControls.jsx
│   │   │   ├── ChamberBackground/
│   │   │   │   ├── ChamberBackground.jsx
│   │   │   │   ├── ChamberBackground.css
│   │   │   │   ├── TimeOfDayOverlay.jsx
│   │   │   │   └── ParallaxLayers.jsx
│   │   │   ├── ChamberAmbient/
│   │   │   │   ├── ChamberAmbient.jsx
│   │   │   │   ├── AudioController.jsx
│   │   │   │   └── VolumeFader.jsx
│   │   │   ├── MessageList/
│   │   │   │   ├── MessageList.jsx
│   │   │   │   ├── MessageList.css
│   │   │   │   ├── InfiniteScroll.jsx
│   │   │   │   ├── MessageGroup.jsx
│   │   │   │   └── DateSeparator.jsx
│   │   │   ├── MessageBubble/
│   │   │   │   ├── MessageBubble.jsx
│   │   │   │   ├── MessageBubble.css
│   │   │   │   ├── SeekerMessage.jsx
│   │   │   │   ├── GuideMessage.jsx
│   │   │   │   ├── SystemMessage.jsx
│   │   │   │   └── MessageReactions.jsx
│   │   │   ├── TypingIndicator/
│   │   │   │   ├── TypingIndicator.jsx
│   │   │   │   └── TypingIndicator.css
│   │   │   ├── MessageInput/
│   │   │   │   ├── MessageInput.jsx
│   │   │   │   ├── MessageInput.css
│   │   │   │   ├── AutoResizeTextarea.jsx
│   │   │   │   ├── SendButton.jsx
│   │   │   │   └── InputSuggestions.jsx
│   │   │   ├── GuideAvatar/
│   │   │   │   ├── GuideAvatar.jsx
│   │   │   │   ├── GuideAvatar.css
│   │   │   │   ├── AvatarStates.js                   # idle, speaking, thinking
│   │   │   │   └── AvatarAnimations.js
│   │   │   ├── PracticeCard/
│   │   │   │   ├── PracticeCard.jsx
│   │   │   │   ├── PracticeCard.css
│   │   │   │   └── PracticeTimer.jsx
│   │   │   ├── ReflectionQuestion/
│   │   │   │   ├── ReflectionQuestion.jsx
│   │   │   │   └── ReflectionQuestion.css
│   │   │   ├── ChamberTransition/
│   │   │   │   ├── ChamberTransition.jsx
│   │   │   │   └── ChamberTransition.css
│   │   │   └── ChamberOrchestrator/
│   │   │       └── ChamberOrchestrator.jsx
│   │   │
│   │   ├── guides/                                 # Individual guide experiences
│   │   │   ├── stoic/
│   │   │   │   ├── StoicSage.jsx
│   │   │   │   ├── StoicSage.css
│   │   │   │   ├── StoicAvatar/
│   │   │   │   │   ├── StoicAvatar.jsx
│   │   │   │   │   └── StoicBust3D.jsx              # Three.js bust
│   │   │   │   ├── StoicResponse/
│   │   │   │   │   ├── StoicResponse.jsx
│   │   │   │   │   ├── Observation.jsx
│   │   │   │   │   ├── DichotomyControl.jsx
│   │   │   │   │   ├── DichotomyVisual.jsx           # Interactive control circle
│   │   │   │   │   ├── Reframe.jsx
│   │   │   │   │   ├── Practice.jsx
│   │   │   │   │   └── Question.jsx
│   │   │   │   ├── StoicPractices/
│   │   │   │   │   ├── MorningPause.jsx
│   │   │   │   │   ├── EveningReview.jsx
│   │   │   │   │   ├── NegativeVisualization.jsx
│   │   │   │   │   ├── MementoMori.jsx
│   │   │   │   │   └── VoluntaryDiscomfort.jsx
│   │   │   │   └── StoicQuotes/
│   │   │   │       └── StoicQuotes.jsx
│   │   │   │
│   │   │   ├── nurturing/
│   │   │   │   ├── NurturingMother.jsx
│   │   │   │   ├── NurturingMother.css
│   │   │   │   ├── NurturingAvatar/
│   │   │   │   │   ├── NurturingAvatar.jsx
│   │   │   │   │   └── HearthFire3D.jsx
│   │   │   │   ├── NurturingResponse/
│   │   │   │   │   ├── NurturingResponse.jsx
│   │   │   │   │   ├── Validation.jsx
│   │   │   │   │   ├── DeeperNeed.jsx
│   │   │   │   │   ├── ComfortAnimation.jsx
│   │   │   │   │   ├── GentleNudge.jsx
│   │   │   │   │   └── Affirmation.jsx
│   │   │   │   ├── NurturingPractices/
│   │   │   │   │   ├── SacredHolding.jsx
│   │   │   │   │   ├── InnerChildLetter.jsx
│   │   │   │   │   ├── SelfCompassionLullaby.jsx
│   │   │   │   │   └── GratitudeWeaving.jsx
│   │   │   │   └── ComfortKit/
│   │   │   │       └── ComfortKit.jsx
│   │   │   │
│   │   │   ├── coach/
│   │   │   │   ├── BoldCoach.jsx
│   │   │   │   ├── BoldCoach.css
│   │   │   │   ├── CoachAvatar/
│   │   │   │   │   ├── CoachAvatar.jsx
│   │   │   │   │   └── ForgeFire3D.jsx
│   │   │   │   ├── CoachResponse/
│   │   │   │   │   ├── CoachResponse.jsx
│   │   │   │   │   ├── RealityCheck.jsx
│   │   │   │   │   ├── Accountability.jsx
│   │   │   │   │   ├── AccountabilityTracker.jsx
│   │   │   │   │   ├── Motivation.jsx
│   │   │   │   │   ├── Challenge.jsx
│   │   │   │   │   └── CheckIn.jsx
│   │   │   │   ├── CoachPractices/
│   │   │   │   │   ├── SacredVow.jsx
│   │   │   │   │   ├── ShadowConfrontation.jsx
│   │   │   │   │   ├── VictoryScroll.jsx
│   │   │   │   │   └── AccountabilityFlame.jsx
│   │   │   │   └── ProgressTracker/
│   │   │   │       ├── ProgressTracker.jsx
│   │   │   │       └── StreakCounter.jsx
│   │   │   │
│   │   │   ├── astrologer/
│   │   │   │   ├── CosmicAstrologer.jsx
│   │   │   │   ├── CosmicAstrologer.css
│   │   │   │   ├── AstrologerAvatar/
│   │   │   │   │   ├── AstrologerAvatar.jsx
│   │   │   │   │   └── CelestialSphere3D.jsx
│   │   │   │   ├── AstrologerResponse/
│   │   │   │   │   ├── AstrologerResponse.jsx
│   │   │   │   │   ├── CelestialContext.jsx
│   │   │   │   │   ├── ArchetypalCurrent.jsx
│   │   │   │   │   ├── CosmicGuidance.jsx
│   │   │   │   │   ├── Ritual.jsx
│   │   │   │   │   └── Affirmation.jsx
│   │   │   │   ├── AstrologyTools/
│   │   │   │   │   ├── BirthChartVisual/
│   │   │   │   │   │   ├── BirthChartVisual.jsx
│   │   │   │   │   │   ├── ChartWheel.jsx
│   │   │   │   │   │   ├── HouseLines.jsx
│   │   │   │   │   │   ├── PlanetMarkers.jsx
│   │   │   │   │   │   └── AspectLines.jsx
│   │   │   │   │   ├── TransitDisplay/
│   │   │   │   │   │   ├── TransitDisplay.jsx
│   │   │   │   │   │   ├── CurrentTransits.jsx
│   │   │   │   │   │   └── TransitTimeline.jsx
│   │   │   │   │   ├── MoonPhaseIndicator/
│   │   │   │   │   │   ├── MoonPhaseIndicator.jsx
│   │   │   │   │   │   └── MoonPhaseWheel.jsx
│   │   │   │   │   ├── ZodiacWisdomCard/
│   │   │   │   │   │   ├── ZodiacWisdomCard.jsx
│   │   │   │   │   │   └── ElementalBalance.jsx
│   │   │   │   │   ├── SynastryMirror/
│   │   │   │   │   │   ├── SynastryMirror.jsx
│   │   │   │   │   │   └── ChartOverlay.jsx
│   │   │   │   │   └── SaturnReturn/
│   │   │   │   │       └── SaturnReturnOracle.jsx
│   │   │   │   └── CelestialEvents/
│   │   │   │       ├── NewMoonRitual.jsx
│   │   │   │       ├── FullMoonRelease.jsx
│   │   │   │       ├── EclipsePortal.jsx
│   │   │   │       ├── MercuryRetrograde.jsx
│   │   │   │       └── SolarReturn.jsx
│   │   │   │
│   │   │   ├── alchemist/
│   │   │   │   ├── ShadowAlchemist.jsx
│   │   │   │   ├── ShadowAlchemist.css
│   │   │   │   ├── AlchemistAvatar/
│   │   │   │   │   ├── AlchemistAvatar.jsx
│   │   │   │   │   └── CaveFlame3D.jsx
│   │   │   │   ├── AlchemistResponse/
│   │   │   │   │   ├── AlchemistResponse.jsx
│   │   │   │   │   ├── ShadowPerception.jsx
│   │   │   │   │   ├── Inquiry.jsx
│   │   │   │   │   ├── HiddenGift.jsx
│   │   │   │   │   ├── IntegrationPractice.jsx
│   │   │   │   │   └── Invitation.jsx
│   │   │   │   ├── ShadowWork/
│   │   │   │   │   ├── ShadowDialogue.jsx
│   │   │   │   │   ├── MaskInventory.jsx
│   │   │   │   │   ├── MaskCard.jsx
│   │   │   │   │   ├── AncestralThread.jsx
│   │   │   │   │   ├── GoldenShadow.jsx
│   │   │   │   │   └── DreamDecoder/
│   │   │   │   │       ├── DreamDecoder.jsx
│   │   │   │   │       ├── DreamInput.jsx
│   │   │   │   │       ├── SymbolExplorer.jsx
│   │   │   │   │       └── DreamJournal.jsx
│   │   │   │   └── AlchemicalStages/
│   │   │   │       ├── Nigredo.jsx
│   │   │   │       ├── Albedo.jsx
│   │   │   │       ├── Citrinitas.jsx
│   │   │   │       └── Rubedo.jsx
│   │   │   │
│   │   │   └── poet/
│   │   │       ├── MysticPoet.jsx
│   │   │       ├── MysticPoet.css
│   │   │       ├── PoetAvatar/
│   │   │       │   ├── PoetAvatar.jsx
│   │   │       │   └── GardenScene3D.jsx
│   │   │       ├── PoetResponse/
│   │   │       │   ├── PoetResponse.jsx
│   │   │       │   ├── PoeticReflection.jsx
│   │   │       │   ├── SacredInquiry.jsx
│   │   │       │   ├── SoulVerse.jsx
│   │   │       │   ├── Contemplation.jsx
│   │   │       │   └── ClosingLine.jsx
│   │   │       ├── PoemDisplay/
│   │   │       │   ├── PoemDisplay.jsx
│   │   │       │   ├── PoemAnimation.jsx
│   │   │       │   ├── VerseByVerse.jsx
│   │   │       │   └── CalligraphyStyles.js
│   │   │       ├── PoetPractices/
│   │   │       │   ├── SoulVerse.jsx
│   │   │       │   ├── EcstaticInquiry.jsx
│   │   │       │   ├── BelovedLetter.jsx
│   │   │       │   └── SilenceBetweenWords.jsx
│   │   │       └── PoetryLibrary/
│   │   │           ├── PoetryLibrary.jsx
│   │   │           ├── RumiCollection.js
│   │   │           ├── HafizCollection.js
│   │   │           └── OriginalPoems.js
│   │   │
│   │   ├── mirror/                                 # Council Synthesis
│   │   │   ├── MirrorCouncil/
│   │   │   │   ├── MirrorCouncil.jsx
│   │   │   │   ├── MirrorCouncil.css
│   │   │   │   └── MirrorCouncil.test.jsx
│   │   │   ├── CouncilConvening/
│   │   │   │   ├── CouncilConvening.jsx
│   │   │   │   ├── GuideSummoning.jsx
│   │   │   │   └── ConvergenceAnimation.jsx
│   │   │   ├── GuideResponseCard/
│   │   │   │   ├── GuideResponseCard.jsx
│   │   │   │   └── ResponseComparison.jsx
│   │   │   ├── SynthesisDisplay/
│   │   │   │   ├── SynthesisDisplay.jsx
│   │   │   │   ├── CommonThread.jsx
│   │   │   │   ├── SacredTension.jsx
│   │   │   │   ├── EmergentInsight.jsx
│   │   │   │   ├── PathForward.jsx
│   │   │   │   └── ClosingBlessing.jsx
│   │   │   ├── CouncilOrchestration/
│   │   │   │   ├── CouncilOrchestration.jsx
│   │   │   │   ├── ResponseTimeline.jsx
│   │   │   │   └── SynthesisProgress.jsx
│   │   │   └── MirrorFragments/
│   │   │       ├── MirrorFragments.jsx
│   │   │       └── FragmentReassembly.jsx
│   │   │
│   │   ├── journal/                                # Soul Journal
│   │   │   ├── SoulJournal/
│   │   │   │   ├── SoulJournal.jsx
│   │   │   │   ├── SoulJournal.css
│   │   │   │   └── SoulJournal.test.jsx
│   │   │   ├── JournalHeader/
│   │   │   │   ├── JournalHeader.jsx
│   │   │   │   └── JournalStats.jsx
│   │   │   ├── JournalFilters/
│   │   │   │   ├── JournalFilters.jsx
│   │   │   │   ├── FilterByGuide.jsx
│   │   │   │   ├── FilterByEmotion.jsx
│   │   │   │   ├── FilterByDate.jsx
│   │   │   │   └── FilterByType.jsx
│   │   │   ├── JournalSearch/
│   │   │   │   ├── JournalSearch.jsx
│   │   │   │   ├── SearchIndex.js                    # Full-text search
│   │   │   │   └── SearchHighlights.jsx
│   │   │   ├── JournalEntry/
│   │   │   │   ├── JournalEntry.jsx
│   │   │   │   ├── JournalEntryCard.jsx
│   │   │   │   ├── EntryExpanded.jsx
│   │   │   │   └── EntryActions.jsx
│   │   │   ├── JournalTimeline/
│   │   │   │   ├── JournalTimeline.jsx
│   │   │   │   └── TimelineNode.jsx
│   │   │   ├── EmotionalGraph/
│   │   │   │   ├── EmotionalGraph.jsx
│   │   │   │   ├── MoodLine.jsx
│   │   │   │   └── EmotionRadar.jsx
│   │   │   ├── ThemeCloud/
│   │   │   │   ├── ThemeCloud.jsx
│   │   │   │   └── ThemeExtractor.js
│   │   │   ├── ZodiacDiary/
│   │   │   │   ├── ZodiacDiary.jsx
│   │   │   │   └── TransitCorrelation.jsx
│   │   │   ├── JournalExport/
│   │   │   │   ├── JournalExport.jsx
│   │   │   │   ├── ExportPDF.js
│   │   │   │   ├── ExportMarkdown.js
│   │   │   │   └── ExportJSON.js
│   │   │   └── JournalInsights/
│   │   │       ├── JournalInsights.jsx
│   │   │       ├── PatternRecognition.js
│   │   │       └── GrowthMilestones.jsx
│   │   │
│   │   ├── crisis/                                 # Safe Harbor protocol
│   │   │   ├── SafeHarbor/
│   │   │   │   ├── SafeHarbor.jsx
│   │   │   │   ├── SafeHarbor.css
│   │   │   │   └── SafeHarbor.test.jsx
│   │   │   ├── CrisisBanner/
│   │   │   │   └── CrisisBanner.jsx
│   │   │   ├── ResourceList/
│   │   │   │   ├── ResourceList.jsx
│   │   │   │   ├── CountryDetector.js
│   │   │   │   └── LocalizedResources.js
│   │   │   ├── BreathingGuide/
│   │   │   │   ├── BreathingGuide.jsx
│   │   │   │   ├── BreathCircle.jsx
│   │   │   │   └── BreathPatterns.js
│   │   │   ├── EmergencyContacts/
│   │   │   │   ├── EmergencyContacts.jsx
│   │   │   │   └── QuickDial.jsx
│   │   │   ├── SafeHarborMessage/
│   │   │   │   └── SafeHarborMessage.jsx
│   │   │   └── CrisisResolution/
│   │   │       ├── CrisisResolution.jsx
│   │   │       └── SafetyPlan.jsx
│   │   │
│   │   ├── profile/                                # User profile
│   │   │   ├── UserProfile/
│   │   │   │   ├── UserProfile.jsx
│   │   │   │   └── UserProfile.css
│   │   │   ├── CosmicBlueprint/
│   │   │   │   ├── CosmicBlueprint.jsx
│   │   │   │   ├── BirthChartFull.jsx
│   │   │   │   ├── PlanetPlacements.jsx
│   │   │   │   └── HouseDescriptions.jsx
│   │   │   ├── SoulSeasonBadge/
│   │   │   │   └── SoulSeasonBadge.jsx
│   │   │   ├── PreferencesPanel/
│   │   │   │   ├── PreferencesPanel.jsx
│   │   │   │   ├── LanguageSelector.jsx
│   │   │   │   ├── ThemeSelector.jsx
│   │   │   │   ├── DefaultGuidesSelector.jsx
│   │   │   │   └── NotificationPreferences.jsx
│   │   │   └── ProfileEditor/
│   │   │       └── ProfileEditor.jsx
│   │   │
│   │   ├── practices/                              # Spiritual practices
│   │   │   ├── PracticeLibrary/
│   │   │   │   ├── PracticeLibrary.jsx
│   │   │   │   └── PracticeCategories.jsx
│   │   │   ├── MorningRituals/
│   │   │   │   ├── MorningRituals.jsx
│   │   │   │   └── ZodiacMorningRitual.jsx
│   │   │   ├── BreathworkJourneys/
│   │   │   │   ├── BreathworkJourneys.jsx
│   │   │   │   └── SomaticGuide.jsx
│   │   │   ├── MantraIncubations/
│   │   │   │   ├── MantraIncubations.jsx
│   │   │   │   └── MantraGenerator.js
│   │   │   ├── AncestralMeditations/
│   │   │   │   └── AncestralMeditations.jsx
│   │   │   ├── GratitudeCeremonies/
│   │   │   │   └── GratitudeCeremonies.jsx
│   │   │   └── ShadowWalking/
│   │   │       └── ShadowWalking.jsx
│   │   │
│   │   └── shared/                                 # Shared UI components
│   │       ├── Button/
│   │       │   ├── Button.jsx
│   │       │   └── Button.css
│   │       ├── Input/
│   │       │   ├── Input.jsx
│   │       │   └── Input.css
│   │       ├── TextArea/
│   │       │   ├── TextArea.jsx
│   │       │   └── TextArea.css
│   │       ├── Modal/
│   │       │   ├── Modal.jsx
│   │       │   ├── Modal.css
│   │       │   ├── ConfirmModal.jsx
│   │       │   └── DrawerModal.jsx
│   │       ├── Toast/
│   │       │   ├── Toast.jsx
│   │       │   ├── ToastContainer.jsx
│   │       │   └── useToast.js
│   │       ├── Tooltip/
│   │       │   └── Tooltip.jsx
│   │       ├── Badge/
│   │       │   └── Badge.jsx
│   │       ├── Card/
│   │       │   ├── Card.jsx
│   │       │   └── Card.css
│   │       ├── Divider/
│   │       │   └── Divider.jsx
│   │       ├── IconButton/
│   │       │   └── IconButton.jsx
│   │       ├── BackButton/
│   │       │   └── BackButton.jsx
│   │       ├── SoundToggle/
│   │       │   └── SoundToggle.jsx
│   │       ├── ThemeToggle/
│   │       │   └── ThemeToggle.jsx
│   │       ├── LoadingSpinner/
│   │       │   ├── LoadingSpinner.jsx
│   │       │   └── LoadingSpinner.css
│   │       ├── Skeleton/
│   │       │   ├── Skeleton.jsx
│   │       │   └── Skeleton.css
│   │       ├── EmptyState/
│   │       │   └── EmptyState.jsx
│   │       ├── ProgressBar/
│   │       │   ├── ProgressBar.jsx
│   │       │   └── ProgressBar.css
│   │       ├── Avatar/
│   │       │   └── Avatar.jsx
│   │       ├── Chip/
│   │       │   └── Chip.jsx
│   │       └── Tabs/
│   │           ├── Tabs.jsx
│   │           └── Tabs.css
│   │
│   ├── hooks/                                      # Custom React hooks
│   │   ├── useStarfield.js
│   │   ├── useStarfield.test.js
│   │   ├── useEmotionalWeather.js
│   │   ├── useMoonPhase.js
│   │   ├── useZodiacInfo.js
│   │   ├── useCrisisDetection.js
│   │   ├── useLocalStorage.js
│   │   ├── useTypewriter.js
│   │   ├── useAmbientSound.js
│   │   ├── useScrollToBottom.js
│   │   ├── useMediaQuery.js
│   │   ├── useKeyboardShortcuts.js
│   │   ├── useAnimationSequence.js
│   │   ├── useParticleEffect.js
│   │   ├── usePrevious.js
│   │   ├── useDebounce.js
│   │   ├── useThrottle.js
│   │   ├── useClickOutside.js
│   │   ├── useFocusTrap.js
│   │   ├── useIntersectionObserver.js
│   │   ├── useIdle.js
│   │   ├── useNetworkStatus.js
│   │   ├── useOnlineStatus.js
│   │   ├── useWakeLock.js
│   │   ├── useFullscreen.js
│   │   ├── useReducedMotion.js
│   │   ├── useSpeechSynthesis.js
│   │   ├── useHapticFeedback.js
│   │   ├── useIdleTimer.js
│   │   ├── useWindowSize.js
│   │   ├── useScrollPosition.js
│   │   ├── useFormValidation.js
│   │   ├── useGeolocation.js
│   │   ├── useClipboard.js
│   │   ├── useFileDownload.js
│   │   ├── useServiceWorker.js
│   │   └── usePerformanceMonitor.js
│   │
│   ├── services/                                   # Business logic layer
│   │   ├── responseEngine/
│   │   │   ├── responseEngine.js                   # Main response orchestrator
│   │   │   ├── responseEngine.test.js
│   │   │   ├── guideDispatcher.js                  # Routes to correct guide
│   │   │   ├── contextBuilder.js                   # Builds prompt context
│   │   │   ├── themeDetector.js                    # Detects conversation themes
│   │   │   ├── emotionAnalyzer.js                  # Analyzes emotional content
│   │   │   └── personalizationEngine.js            # Personalizes responses
│   │   │
│   │   ├── synthesisEngine/
│   │   │   ├── synthesisEngine.js
│   │   │   ├── synthesisEngine.test.js
│   │   │   ├── threadFinder.js
│   │   │   ├── tensionMapper.js
│   │   │   ├── insightGenerator.js
│   │   │   └── blessingComposer.js
│   │   │
│   │   ├── crisisService/
│   │   │   ├── crisisService.js
│   │   │   ├── crisisService.test.js
│   │   │   ├── keywordDetector.js
│   │   │   ├── severityAssessor.js
│   │   │   ├── resourceLocator.js
│   │   │   └── protocolExecutor.js
│   │   │
│   │   ├── storageService/
│   │   │   ├── storageService.js
│   │   │   ├── profileStorage.js
│   │   │   ├── journalStorage.js
│   │   │   ├── preferencesStorage.js
│   │   │   ├── sessionStorage.js
│   │   │   └── migrationService.js
│   │   │
│   │   ├── zodiacService/
│   │   │   ├── zodiacService.js
│   │   │   ├── sunSignCalculator.js
│   │   │   ├── moonSignCalculator.js
│   │   │   ├── risingSignCalculator.js
│   │   │   ├── houseCalculator.js
│   │   │   ├── aspectCalculator.js
│   │   │   ├── transitCalculator.js
│   │   │   └── ephemerisData.js
│   │   │
│   │   ├── moonPhaseService/
│   │   │   ├── moonPhaseService.js
│   │   │   ├── phaseCalculator.js
│   │   │   ├── illuminationCalculator.js
│   │   │   └── lunarCalendar.js
│   │   │
│   │   ├── journalService/
│   │   │   ├── journalService.js
│   │   │   ├── entryCRUD.js
│   │   │   ├── searchIndexer.js
│   │   │   ├── themeExtractor.js
│   │   │   ├── emotionalTracker.js
│   │   │   └── insightGenerator.js
│   │   │
│   │   ├── profileService/
│   │   │   ├── profileService.js
│   │   │   ├── profileValidator.js
│   │   │   └── profileEnricher.js
│   │   │
│   │   ├── soundService/
│   │   │   ├── soundService.js
│   │   │   ├── audioManager.js
│   │   │   ├── playlistManager.js
│   │   │   └── crossfadeEngine.js
│   │   │
│   │   ├── analyticsService/
│   │   │   ├── analyticsService.js
│   │   │   ├── eventTracker.js
│   │   │   └── privacyFilter.js
│   │   │
│   │   ├── notificationService/
│   │   │   ├── notificationService.js
│   │   │   ├── pushManager.js
│   │   │   └── scheduleManager.js
│   │   │
│   │   └── exportService/
│   │       ├── exportService.js
│   │       ├── pdfExporter.js
│   │       ├── markdownExporter.js
│   │       └── jsonExporter.js
│   │
│   ├── data/                                       # Static data and content
│   │   ├── guides.js
│   │   ├── guides.test.js
│   │   ├── zodiac/
│   │   │   ├── zodiacWisdom.js
│   │   │   ├── zodiacGifts.js
│   │   │   ├── zodiacLessons.js
│   │   │   ├── zodiacRituals.js
│   │   │   ├── zodiacAffirmations.js
│   │   │   └── zodiacCompatibility.js
│   │   ├── responses/
│   │   │   ├── stoicResponses.js
│   │   │   ├── nurturingResponses.js
│   │   │   ├── coachResponses.js
│   │   │   ├── astrologerResponses.js
│   │   │   ├── alchemistResponses.js
│   │   │   ├── poetResponses.js
│   │   │   └── synthesisTemplates.js
│   │   ├── poems/
│   │   │   ├── poemCollection.js
│   │   │   ├── poemTemplates.js
│   │   │   ├── rumiInspired.js
│   │   │   ├── hafizInspired.js
│   │   │   ├── oliverInspired.js
│   │   │   └── originalPoems.js
│   │   ├── practices/
│   │   │   ├── stoicPractices.js
│   │   │   ├── nurturingPractices.js
│   │   │   ├── coachPractices.js
│   │   │   ├── astrologerRituals.js
│   │   │   ├── alchemistPractices.js
│   │   │   ├── poetContemplations.js
│   │   │   └── somaticPractices.js
│   │   ├── affirmations/
│   │   │   ├── morningAffirmations.js
│   │   │   ├── eveningAffirmations.js
│   │   │   ├── zodiacAffirmations.js
│   │   │   └── crisisAffirmations.js
│   │   ├── crisisResources/
│   │   │   ├── globalResources.js
│   │   │   ├── usResources.js
│   │   │   ├── ukResources.js
│   │   │   ├── euResources.js
│   │   │   └── asiaResources.js
│   │   ├── moonPhaseData.js
│   │   ├── seasons.js
│   │   ├── emotionalStates.js
│   │   ├── conversationStarters.js
│   │   └── symbolicDictionary.js
│   │
│   ├── utils/                                      # Utility functions
│   │   ├── crisisDetection.js
│   │   ├── crisisDetection.test.js
│   │   ├── moonPhase.js
│   │   ├── moonPhase.test.js
│   │   ├── zodiacCalculator.js
│   │   ├── zodiacCalculator.test.js
│   │   ├── storage.js
│   │   ├── storage.test.js
│   │   ├── formatters/
│   │   │   ├── dateFormatter.js
│   │   │   ├── textFormatter.js
│   │   │   └── numberFormatter.js
│   │   ├── validators/
│   │   │   ├── inputValidator.js
│   │   │   ├── dateValidator.js
│   │   │   └── profileValidator.js
│   │   ├── animations/
│   │   │   ├── animationVariants.js
│   │   │   ├── transitionPresets.js
│   │   │   ├── springConfigs.js
│   │   │   └── staggerUtils.js
│   │   ├── colors/
│   │   │   ├── colorPalettes.js
│   │   │   ├── guideColors.js
│   │   │   └── moodColors.js
│   │   ├── dates/
│   │   │   ├── dateUtils.js
│   │   │   ├── timeAgo.js
│   │   │   └── calendarUtils.js
│   │   ├── strings/
│   │   │   ├── stringUtils.js
│   │   │   ├── slugify.js
│   │   │   └── truncate.js
│   │   ├── arrays/
│   │   │   ├── shuffle.js
│   │   │   └── chunk.js
│   │   ├── objects/
│   │   │   ├── deepMerge.js
│   │   │   └── pick.js
│   │   ├── encryption/
│   │   │   ├── encrypt.js
│   │   │   └── decrypt.js
│   │   ├── compression/
│   │   │   └── compress.js
│   │   ├── dom/
│   │   │   ├── scrollTo.js
│   │   │   └── focusManager.js
│   │   ├── browser/
│   │   │   ├── detectBrowser.js
│   │   │   └── detectOS.js
│   │   └── performance/
│   │       ├── measurePerformance.js
│   │       └── lazyLoad.js
│   │
│   ├── contexts/                                   # React Context providers
│   │   ├── AppContext/
│   │   │   ├── AppContext.jsx
│   │   │   └── AppProvider.jsx
│   │   ├── ProfileContext/
│   │   │   ├── ProfileContext.jsx
│   │   │   └── ProfileProvider.jsx
│   │   ├── JournalContext/
│   │   │   ├── JournalContext.jsx
│   │   │   └── JournalProvider.jsx
│   │   ├── ThemeContext/
│   │   │   ├── ThemeContext.jsx
│   │   │   └── ThemeProvider.jsx
│   │   ├── SoundContext/
│   │   │   ├── SoundContext.jsx
│   │   │   └── SoundProvider.jsx
│   │   ├── NavigationContext/
│   │   │   ├── NavigationContext.jsx
│   │   │   └── NavigationProvider.jsx
│   │   ├── CrisisContext/
│   │   │   ├── CrisisContext.jsx
│   │   │   └── CrisisProvider.jsx
│   │   ├── MirrorContext/
│   │   │   ├── MirrorContext.jsx
│   │   │   └── MirrorProvider.jsx
│   │   ├── ChamberContext/
│   │   │   ├── ChamberContext.jsx
│   │   │   └── ChamberProvider.jsx
│   │   └── I18nContext/
│   │       ├── I18nContext.jsx
│   │       └── I18nProvider.jsx
│   │
│   ├── reducers/                                   # State reducers
│   │   ├── appReducer.js
│   │   ├── profileReducer.js
│   │   ├── journalReducer.js
│   │   ├── chamberReducer.js
│   │   ├── mirrorReducer.js
│   │   ├── crisisReducer.js
│   │   └── navigationReducer.js
│   │
│   ├── middleware/                                 # Custom middleware
│   │   ├── analyticsMiddleware.js
│   │   ├── loggingMiddleware.js
│   │   ├── persistenceMiddleware.js
│   │   └── crisisMiddleware.js
│   │
│   ├── workers/                                    # Web Workers
│   │   ├── starfield.worker.js
│   │   ├── zodiac.worker.js
│   │   ├── search.worker.js
│   │   └── export.worker.js
│   │
│   ├── styles/                                     # Additional styles
│   │   ├── animations.css
│   │   ├── typography.css
│   │   ├── chambers.css
│   │   ├── responsive.css
│   │   ├── themes.css
│   │   ├── utilities.css
│   │   └── print.css
│   │
│   └── types/                                      # JSDoc type definitions
│       ├── guide.types.js
│       ├── profile.types.js
│       ├── journal.types.js
│       ├── message.types.js
│       ├── response.types.js
│       ├── chamber.types.js
│       ├── mirror.types.js
│       ├── crisis.types.js
│       ├── zodiac.types.js
│       └── common.types.js
│
├── tests/
│   ├── unit/
│   │   ├── utils/
│   │   │   ├── moonPhase.test.js
│   │   │   ├── crisisDetection.test.js
│   │   │   ├── zodiacCalculator.test.js
│   │   │   ├── storage.test.js
│   │   │   └── validators.test.js
│   │   ├── services/
│   │   │   ├── responseEngine.test.js
│   │   │   ├── synthesisEngine.test.js
│   │   │   ├── crisisService.test.js
│   │   │   └── zodiacService.test.js
│   │   ├── hooks/
│   │   │   ├── useEmotionalWeather.test.js
│   │   │   ├── useTypewriter.test.js
│   │   │   └── useLocalStorage.test.js
│   │   └── data/
│   │       └── guides.test.js
│   │
│   ├── integration/
│   │   ├── Chamber.test.jsx
│   │   ├── MirrorCouncil.test.jsx
│   │   ├── SoulJournal.test.jsx
│   │   ├── Onboarding.test.jsx
│   │   ├── GreatHall.test.jsx
│   │   └── CrisisFlow.test.jsx
│   │
│   ├── e2e/
│   │   ├── onboarding-flow.test.js
│   │   ├── chamber-conversation.test.js
│   │   ├── council-synthesis.test.js
│   │   ├── crisis-protocol.test.js
│   │   ├── journal-management.test.js
│   │   └── multi-language.test.js
│   │
│   ├── fixtures/
│   │   ├── mockProfile.js
│   │   ├── mockJournal.js
│   │   ├── mockResponses.js
│   │   └── mockGuides.js
│   │
│   └── helpers/
│       ├── renderWithContexts.jsx
│       ├── setupTestEnvironment.js
│       └── userEventSequence.js
│
├── scripts/
│   ├── build.sh
│   ├── deploy.sh
│   ├── generate-icons.sh
│   ├── optimize-images.sh
│   ├── analyze-bundle.sh
│   └── version-bump.sh
│
├── .github/
│   ├── workflows/
│   │   ├── ci.yml
│   │   ├── deploy-preview.yml
│   │   └── deploy-production.yml
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   └── feature_request.md
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── CODEOWNERS
│
├── .gitignore
├── .env.example
├── .env.development
├── .env.production
├── .eslintrc.js
├── .eslintignore
├── .prettierrc
├── .prettierignore
├── .browserslistrc
├── .nvmrc
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── package-lock.json
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
├── DEPLOYMENT.md
├── ARCHITECTURE.md
└── ROADMAP.md