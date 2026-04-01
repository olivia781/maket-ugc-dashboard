// UGC Dashboard Data — Updated 2026-04-01
// Update this file weekly with fresh SideShift pulls

const DASHBOARD_DATA = {
  lastUpdated: "2026-04-01",
  weekNumber: 1,

  // ── Summary Metrics ──
  summary: {
    totalSpend: 16926.26,
    totalViews: 7951402,
    avgCPM: 2.17,
    videosPaid: 911,
    totalOwed: 6524.53,
    totalPosts: 1116,
    activeCampaign: "BETA - MAKET.AI"
  },

  // ── Creator Roster ──
  creators: [
    {
      name: "Jett Suherwan",
      handles: ["@maket.jef", "@maket.jet"],
      views: 4457079,
      engagement: 67083,
      posts: 131,
      avgViews: 34024,
      cpm: 0.54,
      owed: 2267.91,
      delivered: "22/42",
      status: "star",
      trend: "stable",
      topHook: "I owe my future home design to the person I met on the train",
      topHookViews: 1300000,
      action: "Refresh hooks — retire 'goated', assign storytelling origin + competitor contrast",
      notes: "Dominates the roster. 57% of total views. Hook fatigue on 'goated' — same caption used 10+ times. Needs fresh angles to maintain momentum."
    },
    {
      name: "Teya Pelletier",
      handles: ["@teya.maket"],
      views: 1203334,
      engagement: 102756,
      posts: 76,
      avgViews: 15833,
      cpm: 1.82,
      owed: 266.12,
      delivered: "29/42",
      status: "active",
      trend: "up",
      topHook: "I could literally KISS the interior designer that showed me this",
      topHookViews: 795200,
      action: "Give storytelling origin hook — she has the emotional range to sell it",
      notes: "BEST engagement rate (7.19% on top post). Emotional, expressive delivery. Her 'KISS' hook worked across platforms. Strong candidate for new hook categories."
    },
    {
      name: "Miftahol Jannah",
      handles: ["@maketmj", "@maketmj6"],
      views: 766713,
      engagement: 26993,
      posts: 156,
      avgViews: 4915,
      cpm: 0.64,
      owed: 273.26,
      delivered: "33/42",
      status: "active",
      trend: "stable",
      topHook: "my architecture professor is going to HATE me",
      topHookViews: 506600,
      action: "Test more Authority Defiance hooks — her #3 post proves this angle works for her audience. Also test competitor contrast (Pinterest).",
      notes: "Her #3 overall post (506K views) used 'my architecture professor is going to HATE me' — an Authority Defiance hook, NOT a pure demo. Great CPM at $0.64. Most reliable poster (33/42 delivered). Authority Defiance is a brand new hook category with massive potential."
    },
    {
      name: "Dominik Babu",
      handles: ["@domdoesmaket"],
      views: 567285,
      engagement: 3686,
      posts: 55,
      avgViews: 10314,
      cpm: 0.26,
      owed: 1309.90,
      delivered: "34/42",
      status: "active",
      trend: "up",
      topHook: "I could literally KISS the interior designer that showed me this hack",
      topHookViews: 451800,
      action: "BEST CPM — give him storytelling origin hook for maximum ROI",
      notes: "Best CPM on the roster at $0.26. His 452K post used the KISS hook (Hyperbolic Gratitude), NOT 'I can't believe I didn't find this sooner' — the SideShift caption was misleading. If storytelling origin hooks work for him, the ROI will be extraordinary."
    },
    {
      name: "Kyle Poselero",
      handles: ["@buildingblocksky"],
      views: 251085,
      engagement: 3528,
      posts: 72,
      avgViews: 3487,
      cpm: 1.39,
      owed: 569.48,
      delivered: "36/42",
      status: "active",
      trend: "stable",
      topHook: "I could literally KISS the interior designer that showed me this hack",
      topHookViews: 91291,
      action: "Test wasted effort hook — '$5K architect' angle fits his builder persona",
      notes: "Solid delivery rate (36/42) but avg views lagging. His audience is more builder/contractor focused — financial hooks should resonate. Test 'my architect charged $5K for what this does in 2 minutes'."
    },
    {
      name: "Kalyssa Tiffin",
      handles: ["@maket.kalyssa"],
      views: 261845,
      engagement: 6850,
      posts: 156,
      avgViews: 1678,
      cpm: 2.13,
      owed: 266.65,
      delivered: "30/42",
      status: "watch",
      trend: "down",
      topHook: "",
      topHookViews: 49400,
      action: "Monitor 1 more week — if avg views don't improve with new hooks, consider cutting",
      notes: "High post volume (156) but very low avg views (1,678). CPM at $2.13 is approaching the danger zone. She's posting a lot but nothing is catching. Needs a hook intervention."
    },
    {
      name: "Mojan M",
      handles: ["@mo.maket1"],
      views: 30255,
      engagement: 551,
      posts: 23,
      avgViews: 1315,
      cpm: null,
      owed: 197.41,
      delivered: "23/42",
      status: "watch",
      trend: "new",
      topHook: "My new obsession",
      topHookViews: 13300,
      action: "Too early to judge — needs 2 more weeks. Give her a proven hook to test.",
      notes: "Only 23 posts — too small a sample. One post hit 13.3K which shows potential. Give her the 'KISS the interior designer' hook since it's proven across multiple creators."
    },
    {
      name: "Paige Eligon",
      handles: ["@paige.eligon"],
      views: 13996,
      engagement: 369,
      posts: 25,
      avgViews: 560,
      cpm: null,
      owed: 176.80,
      delivered: "25/42",
      status: "watch",
      trend: "new",
      topHook: "why didn't I know about this BEFOREE??",
      topHookViews: 206,
      action: "PROMISING — 7.77% eng rate on one post. Give competitor contrast hook for TikTok.",
      notes: "Tiny sample but her engagement rate (7.77%) is the HIGHEST on the roster. If she can maintain that with better hooks and more posts, she could be a breakout star. TikTok-native which is valuable."
    },
    {
      name: "Julian Gries",
      handles: ["@julian.gries"],
      views: 49452,
      engagement: 486,
      posts: 72,
      avgViews: 687,
      cpm: 6.10,
      owed: 224.50,
      delivered: "30/42",
      status: "at-risk",
      trend: "down",
      topHook: "The transformation is crazy",
      topHookViews: 0,
      action: "FINAL TEST — give one strong hook. If no improvement in 1 week, cut.",
      notes: "$6.10 CPM with only 687 avg views. Posting consistently (30/42) but nothing is landing. One more week with a proven hook (competitor contrast or storytelling origin), then make the call."
    },
    {
      name: "David Cole",
      handles: ["@david.cole"],
      views: 21683,
      engagement: 317,
      posts: 54,
      avgViews: 402,
      cpm: 7.48,
      owed: 201.23,
      delivered: "30/42",
      status: "at-risk",
      trend: "down",
      topHook: "",
      topHookViews: 0,
      action: "FINAL TEST — worst CPM on roster. 1 week deadline or terminate.",
      notes: "Worst performer by CPM ($7.48) and avg views (402). He's posting but the content simply isn't resonating. Expensive for what we're getting. Strong termination candidate unless the next hook test shows a dramatic improvement."
    },
    {
      name: "Ihasmim Amorim",
      handles: ["@ihasmim"],
      views: 0,
      engagement: 0,
      posts: 0,
      avgViews: 0,
      cpm: null,
      owed: 0,
      delivered: "0/42",
      status: "watch",
      trend: "new",
      topHook: "",
      topHookViews: 0,
      action: "CHECK IN — may still be warming up account. Give until 1.5 weeks before judging.",
      notes: "0 posts so far but could be in account warm-up phase. Check in to confirm they're ramping up and have the hook briefs. If no posts after 1.5 weeks from start date, escalate to at-risk."
    }
  ],

  // ── Hook Analysis ──
  hookCategories: [
    {
      name: "Storytelling Origin",
      avgViews: 697500,
      bestExample: "I owe my future home design to the person I met on the train",
      bestViews: 1327000,
      timesUsed: 2,
      status: "proven",
      whyItWorks: "Curiosity + narrative = maximum watch-through. The brain needs to close the story loop. Research shows story hooks have the highest completion rates in 2026 UGC content. This format forces the viewer to watch the entire video to understand the origin story.",
      researchBacking: "Terra Market Group's 2026 hook study found story hooks achieve 70%+ completion rates — the threshold needed for TikTok's algorithm to boost distribution. The winning Maket format is: expressive face reaction + text overlay hook + Maket demo. No spoken hook needed — the silence keeps it feeling native, not like an ad.",
      nextTests: [
        "The contractor who saved my $40K renovation told me about this one website",
        "My architect friend showed me this at dinner and I haven't slept since",
        "I was quoted $8,000 for an architect. Then I found this...",
        "We almost gave up on building our home. Then we tried this."
      ]
    },
    {
      name: "Hyperbolic Gratitude",
      avgViews: 342000,
      bestExample: "I could literally KISS the interior designer that showed me this",
      bestViews: 798000,
      timesUsed: 7,
      status: "proven-workhorse",
      whyItWorks: "Extreme emotional expression creates pattern interrupt in the feed. The exaggeration signals 'this is worth stopping for.' The specificity of 'interior designer' adds credibility vs generic 'someone.' Works across demographics because gratitude is universally relatable.",
      researchBacking: "MarketingBlocks' 2026 viral hook analysis identifies 'emotional amplification' as the #2 driver of share-worthy content. Hooks that express extreme positive emotion (KISS, obsessed, life-changing) trigger mirror neurons — viewers feel the excitement vicariously.",
      nextTests: [
        "I could HUG the stranger who told me about this at Home Depot",
        "The interior designer who showed me this deserves a raise",
        "I could literally KISS the person who told me to stop using Pinterest for floor plans"
      ]
    },
    {
      name: "Competitor Contrast",
      avgViews: 198000,
      bestExample: "You're telling me I spent a year using ChatGPT to design my home when I could've just done THIS",
      bestViews: 319000,
      timesUsed: 4,
      status: "proven",
      whyItWorks: "Creates cognitive dissonance — the viewer realizes they might also be wasting time with the wrong tool. The 'THIS' creates an irresistible open loop. Naming a specific competitor (ChatGPT, Pinterest) makes it concrete and relatable rather than abstract.",
      researchBacking: "The 'bold statement / controversy' hook type is one of 7 high-converting hook types identified by Xwork's 2026 Hook Matrix. Competitor callouts work because they tap into loss aversion — people fear they're missing a better option. ChatGPT hook had 2.50% eng rate (highest in top 20) because it challenges an assumption viewers hold.",
      nextTests: [
        "I spent 3 hours on Pinterest mood boards when THIS exists",
        "My architect charged me $5K for what this does in 2 minutes",
        "POV: you just found out ChatGPT can't actually design floor plans",
        "Stop paying for floor plans in 2026.",
        "This free AI just made my architect nervous."
      ]
    },
    {
      name: "Wasted Effort / Regret",
      avgViews: 139000,
      bestExample: "You're telling me I spent 4 years in architecture school when I could've done THIS",
      bestViews: 179000,
      timesUsed: 2,
      status: "high-potential",
      whyItWorks: "Loss aversion is the strongest psychological motivator — stronger than potential gains. Showing wasted time/money makes the viewer immediately calculate their own wasted effort. The regret is relatable; the solution provides relief.",
      researchBacking: "Warning/negative hooks ('STOP', 'I wasted', 'Don't make this mistake') are among the highest performers in 2026 per SendShort's analysis of 14 top TikTok hook types. Loss aversion bias means people are 2x more motivated by avoiding losses than achieving equivalent gains. Renovation mistake content consistently outperforms aspirational content.",
      nextTests: [
        "3 floor plan mistakes that cost homeowners $50K (and how AI catches them)",
        "STOP renovating until you've seen this.",
        "I wasted $15K on an architect before finding this free tool",
        "bruhhh I spent months on this and AI did it in 30 seconds"
      ]
    },
    {
      name: "Authority Defiance",
      avgViews: 508000,
      bestExample: "my architecture professor is going to HATE me",
      bestViews: 508000,
      timesUsed: 1,
      status: "high-potential",
      whyItWorks: "Creates an 'us vs them' dynamic — the viewer sides with the creator against an authority figure. The word 'HATE' is visceral and stops the scroll. It implies the tool is so powerful it threatens the establishment. Appeals to both students and anyone who's felt intimidated by professionals.",
      researchBacking: "Bold statement / controversy hooks are among the highest-converting hook types (Xwork 2026 Hook Matrix). Authority defiance taps into anti-establishment sentiment — especially powerful with Gen Z audiences. The emotional charge ('HATE') triggers stronger engagement than neutral discovery hooks.",
      nextTests: [
        "my interior design teacher is going to lose it when she sees this",
        "architects don't want you to know about this website",
        "my contractor told me this was impossible. then I showed him THIS.",
        "my realtor said I couldn't afford a designer. watch this."
      ]
    },
    {
      name: "Discovery / FOMO",
      avgViews: 0,
      bestExample: "I can't believe how easy this is",
      bestViews: 0,
      timesUsed: 0,
      status: "caption-only",
      whyItWorks: "NOTE: Previously listed as 5 uses with 451K+ views, but the SideShift audit revealed 'I can't believe I didn't find this sooner' was only a CAPTION — the actual video text overlays on those posts were KISS hooks (Hyperbolic Gratitude) or other categories. This category has NOT been tested as a video text overlay hook. The captions like 'i can't believe how easy this is' and 'this website is so goated' are just generic captions, not the hooks driving performance.",
      researchBacking: "Curiosity hooks are the #1 hook type in Xwork's Hook Matrix. Worth testing as an actual video text overlay since the caption version was never the real hook.",
      nextTests: [
        "Nobody's talking about this AI tool for homeowners.",
        "What if you could see 10 versions of your dream home before hiring anyone?",
        "Why are first-time homeowners obsessed with this app?"
      ]
    },
    {
      name: "Slang Endorsement (Caption Only)",
      avgViews: 0,
      bestExample: "This website is so goated",
      bestViews: 0,
      timesUsed: 0,
      status: "caption-only",
      whyItWorks: "CORRECTION: 'This website is so goated' was NEVER a video text overlay hook — it was only used as the SideShift/Instagram CAPTION. Every post with this caption actually had a different hook on the video itself (KISS, ChatGPT contrast, wasted effort, etc.). The caption is NOT what drives views — the video text overlay hook is.",
      researchBacking: "The audit of all top 17 posts confirmed: zero posts used 'goated' as the actual video text overlay. This was a data error caused by reading SideShift captions instead of watching the actual videos.",
      nextTests: [
        "Not recommended as a video hook — it was never one to begin with."
      ]
    }
  ],

  // ── Research-Backed New Hook Ideas ──
  hooksToTest: [
    {
      hook: "The contractor who saved my $40K renovation told me about this one website",
      category: "Storytelling Origin",
      assignTo: "Teya Pelletier",
      platform: "TikTok + IG + YouTube",
      priority: "high",
      rationale: "Storytelling origin is the highest avg-views hook (697K avg across 2 uses, 1.33M best). This variant adds a financial stake ($40K) which triggers loss aversion. Teya has the emotional delivery to sell a story — her 7.19% eng rate proves she connects with audiences. The 'contractor' character adds credibility specific to the renovation niche.",
      researchBasis: "Story hooks achieve 70%+ completion rates (Terra Market Group 2026). Financial stakes amplify emotional engagement. Renovation regret content outperforms aspirational content in the home niche."
    },
    {
      hook: "My architect friend showed me this at dinner and I haven't slept since",
      category: "Storytelling Origin",
      assignTo: "Dominik Babu",
      platform: "TikTok + IG + YouTube",
      priority: "high",
      rationale: "Dominik has the best CPM ($0.26) — if this hook works, the ROI will be extraordinary. The 'architect friend' adds professional credibility. 'Haven't slept since' is hyperbolic enough to stop the scroll but believable enough to feel authentic. Tests if storytelling origin works across different creator personas.",
      researchBasis: "The curiosity-based reveal format is the #1 performing format for AI tool discovery content in 2026. Personal anecdotes score highest for perceived authenticity in UGC."
    },
    {
      hook: "I spent 3 hours on Pinterest mood boards when THIS exists",
      category: "Competitor Contrast",
      assignTo: "Miftahol Jannah",
      platform: "TikTok + IG + YouTube",
      priority: "high",
      rationale: "Pinterest is the #1 place people go for home design inspiration — this directly attacks that workflow. 'THIS' creates the same open loop that made Jett's ChatGPT hook work (317K views, 2.50% eng). Miftahol's demo-style content pairs perfectly with showing the Maket output after the hook.",
      researchBasis: "Competitor contrast hooks tap into loss aversion — 2x more motivating than potential gains. Pinterest is the most relatable competitor for the home design audience. The open loop ('THIS') forces watch-through per OpusClip's hook formula research."
    },
    {
      hook: "My architect charged me $5K for what this does in 2 minutes",
      category: "Wasted Effort + Financial",
      assignTo: "Kyle Poselero",
      platform: "TikTok + IG + YouTube",
      priority: "high",
      rationale: "Kyle's audience is builder/contractor-focused — financial pain points resonate strongly with this demographic. The $5K figure is specific enough to be believable and shocking enough to stop the scroll. Combines wasted money AND wasted time for double FOMO. ADU/income suite content driven by financial motivation outperforms pure aesthetics.",
      researchBasis: "Financial angles consistently outperform pure aesthetic content in the renovation niche. Warning hooks are among the highest performers in 2026 (SendShort). Specific dollar amounts increase credibility and engagement vs vague claims."
    },
    {
      hook: "POV: you just found out ChatGPT can't actually design floor plans",
      category: "Competitor Callout",
      assignTo: "Paige Eligon",
      platform: "TikTok + IG + YouTube",
      priority: "medium",
      rationale: "Paige's 7.77% engagement rate is the highest on the roster — she needs a hook that can scale her reach. ChatGPT callout had the best engagement rate in the top 20. POV format is native to TikTok. This positions Maket as the solution to a problem millions of ChatGPT users have experienced. Tests if Paige can be the breakout TikTok star.",
      researchBasis: "Bold statement / controversy hooks create cognitive dissonance that drives engagement (Xwork Hook Matrix). ChatGPT has 200M+ users — massive addressable audience who've tried using it for design. POV format consistently trends on TikTok (Kapwing March 2026 trends)."
    },
    {
      hook: "The open floor plan is dead. Here's what replaced it.",
      category: "Trend Jacking + Bold Statement",
      assignTo: "Jett Suherwan",
      platform: "TikTok + IG + YouTube",
      priority: "medium",
      rationale: "The 'broken floor plan' is THE biggest TikTok interior design trend of 2026 — opposition to open-plan layouts has become a genre. This hook rides that wave while naturally showcasing Maket's floor plan generation. Jett needs fresh hooks (not 'goated') and this trend gives him new material. Bold statements drive controversy and comments.",
      researchBasis: "Palm Beach Today and PORTER both identify the 'broken floor plan' as a top 2026 design trend. TikTok's algorithm rewards content tied to trending topics. Bold statement hooks create cognitive dissonance — viewers must engage to resolve the disagreement (Cloudix Digital 2026 hook science)."
    },
    {
      hook: "3 floor plan mistakes that cost homeowners $50K (and how AI catches them)",
      category: "Warning / Negative Hook",
      assignTo: "Miftahol Jannah",
      platform: "TikTok + IG + YouTube",
      priority: "medium",
      rationale: "Warning hooks are the highest-performing category in 2026 UGC. This positions Maket not as a 'cool AI toy' but as a money-saving prevention tool — a stronger value prop. Miftahol's demo style works perfectly for showing the 'mistakes' and then the AI-corrected version.",
      researchBasis: "Loss aversion bias: people are 2x more motivated by avoiding losses than achieving gains. Warning/mistake content outperforms aspirational content in the renovation space."
    },
    {
      hook: "my interior design teacher is going to lose it when she sees this",
      category: "Authority Defiance",
      assignTo: "Miftahol Jannah",
      platform: "TikTok + IG + YouTube",
      priority: "high",
      rationale: "Miftahol's #3 overall post (506K views) used 'my architecture professor is going to HATE me' — Authority Defiance hook. This is a direct variant of what already worked for her. Authority Defiance is a brand new category with only 1 use but a 508K avg — massive potential. Double down on her proven angle.",
      researchBasis: "Bold statement / controversy hooks are among the highest-converting types (Xwork 2026). Authority defiance taps into anti-establishment sentiment. Miftahol already proved she can execute this format — give her more variations to test."
    },
    {
      hook: "I asked AI to roast my floor plan. It was brutal.",
      category: "Pattern Interrupt + Humor",
      assignTo: "Teya Pelletier",
      platform: "TikTok + IG + YouTube",
      priority: "low",
      rationale: "Humor hooks are under-represented in Maket's current content. 'Roast' format is hugely popular across TikTok. This creates curiosity (what did the AI say?) and entertainment value. Teya's expressive reactions would make this format shine. Tests a completely new angle for the brand.",
      researchBasis: "Pattern interrupt hooks break feed monotony and trigger dopamine (Xwork Hook Matrix). Humor content has higher share rates than educational content. Skits and humor-driven UGC are the #1 emerging format in 2026 (RevenueCat app UGC study)."
    },
    {
      hook: "POV: AI just solved the housing crisis in your backyard",
      category: "Pattern Interrupt + ADU Trend",
      assignTo: "Kyle Poselero",
      platform: "TikTok + IG + YouTube",
      priority: "low",
      rationale: "ADU (accessory dwelling unit) content is a massive underserved niche. Housing costs are driving interest in backyard suites and rental income. Kyle's builder persona is perfect for this angle. Financial motivation (rental income) drives higher engagement than pure aesthetics.",
      researchBasis: "ADU/income suite content is trending in 2026 renovation space. Financial motivation outperforms aesthetic motivation for engagement."
    }
  ],

  // ── Weekly Decisions ──
  weeklyDecisions: [
    {
      week: 1,
      date: "2026-04-01",
      decisions: [
        { type: "watch", creator: "Ihasmim Amorim", action: "Check in — confirm account warm-up progress", reasoning: "0 posts so far but may still be in ramp-up phase. Give 1.5 weeks from start date before escalating.", outcome: "First posts within the week", result: "" },
        { type: "test", creator: "Teya Pelletier", action: "Assign storytelling origin hook", reasoning: "Best eng rate (7.19%) + proven emotional delivery. Storytelling origin has the highest per-post avg (697K across 2 uses).", outcome: "Target 500K+ views", result: "" },
        { type: "test", creator: "Dominik Babu", action: "Assign storytelling origin hook", reasoning: "Best CPM ($0.26) — if the hook works, extraordinary ROI. His 452K post proves he can hit big numbers.", outcome: "Target 300K+ views", result: "" },
        { type: "test", creator: "Miftahol Jannah", action: "Assign Authority Defiance variant + competitor contrast (Pinterest)", reasoning: "Her 506K post used Authority Defiance ('my professor is going to HATE me') — double down on what works. Also test Pinterest contrast as second angle.", outcome: "Target 200K+ views", result: "" },
        { type: "test", creator: "Kyle Poselero", action: "Assign financial wasted effort hook ($5K architect)", reasoning: "Builder audience responds to financial pain points. Specific dollar amounts increase credibility.", outcome: "Target 100K+ views", result: "" },
        { type: "scale", creator: "Jett Suherwan", action: "Refresh all hooks — retire 'goated', assign broken floor plan trend + competitor contrast", reasoning: "34K avg views but 'goated' used 12+ times — hook fatigue. Needs fresh angles. Broken floor plan is THE 2026 design trend.", outcome: "Maintain 30K+ avg with fresh hooks", result: "" },
        { type: "watch", creator: "Julian Gries", action: "Final hook test — 1 week deadline", reasoning: "$6.10 CPM, 687 avg views. Give competitor contrast hook. Must show dramatic improvement or cut.", outcome: "Must hit 10K+ views or terminate", result: "" },
        { type: "watch", creator: "David Cole", action: "Final hook test — 1 week deadline", reasoning: "$7.48 CPM, 402 avg views. Worst performer with actual spend. One more chance.", outcome: "Must hit 10K+ views or terminate", result: "" },
        { type: "investigate", creator: "Paige Eligon", action: "Monitor + give ChatGPT competitor callout hook", reasoning: "Only 25 posts but 7.77% eng rate — highest on roster. Needs more data but signal is promising.", outcome: "Need 2 more weeks of data", result: "" },
        { type: "investigate", creator: "Mojan M", action: "Monitor + give proven 'KISS' hook", reasoning: "Only 23 posts. One post hit 13.3K. Give her a proven hook to see if she can scale.", outcome: "Need 2 more weeks of data", result: "" }
      ]
    }
  ],

  // ── Weekend Briefs (per-creator action items) ──
  weekendBriefs: {
    targetDate: "Weekend of April 5-6",
    note: "Post Saturday 10-11am for best home design engagement",
    briefs: [
      {
        creator: "Jett Suherwan",
        status: "star",
        assignment: "Open Floor Plan Is Dead",
        hookText: "The open floor plan is dead. Here's what replaced it.",
        format: "Face reaction (shocked) + text overlay hook + Maket demo showing a broken-plan layout with partial walls and defined zones",
        category: "Trend Jacking + Bold Statement",
        why: "Broken floor plan is THE 2026 design trend. Replaces his overused 'goated' hook with fresh material. Controversial take = comments and shares.",
        urgency: "briefed",
        messageStatus: "Already briefed"
      },
      {
        creator: "Teya Pelletier",
        status: "active",
        assignment: "Storytelling Origin Hook",
        hookText: "The contractor who saved my $40K renovation told me about this one website",
        format: "Face reaction (emotional/grateful) + text overlay hook + Maket demo. Her emotional delivery is her superpower — let it show in the reaction.",
        category: "Storytelling Origin",
        why: "Storytelling origin got 1.3M views but was only tested ONCE. Teya has the best engagement rate (7.19%) and proven emotional range. This is the highest-upside test.",
        urgency: "brief-now",
        messageStatus: "Send brief this week"
      },
      {
        creator: "Dominik Babu",
        status: "active",
        assignment: "Storytelling Origin Hook",
        hookText: "My architect friend showed me this at dinner and I haven't slept since",
        format: "Face reaction (mind-blown) + text overlay hook + Maket demo. Keep it simple — his strength is consistency, not theatrics.",
        category: "Storytelling Origin",
        why: "Best CPM on the roster ($0.26). If this hook works with him, the ROI is unbeatable. His 452K post proves he can hit big numbers when the hook lands.",
        urgency: "brief-now",
        messageStatus: "Send brief this week"
      },
      {
        creator: "Miftahol Jannah",
        status: "active",
        assignment: "Authority Defiance + Competitor Contrast",
        hookText: "Authority Defiance: 'my interior design teacher is going to lose it when she sees this'. AND separately: 'I spent 3 hours on Pinterest mood boards when THIS exists'",
        format: "Face reaction (mischievous/excited) + text overlay hook + Maket demo. Her 506K post used the Authority Defiance angle ('my architecture professor is going to HATE me') — lean into what already worked for her.",
        category: "Authority Defiance + Competitor Contrast",
        why: "Her 506K hit used Authority Defiance, NOT a pure demo — the audit confirmed text overlay was 'my architecture professor is going to HATE me.' Double down on what works for her. Also test Pinterest contrast as a second angle.",
        urgency: "brief-now",
        messageStatus: "Send brief this week"
      },
      {
        creator: "Kyle Poselero",
        status: "active",
        assignment: "Financial Wasted Effort Hook",
        hookText: "My architect charged me $5K for what this does in 2 minutes",
        format: "Face reaction (frustrated/shocked) + text overlay hook + Maket demo. His builder audience responds to dollar amounts.",
        category: "Wasted Effort + Financial",
        why: "Builder/contractor audience = financial pain points land harder. Specific dollar amount ($5K) is believable and scroll-stopping. His delivery rate is solid (36/42).",
        urgency: "brief-now",
        messageStatus: "Send brief this week"
      },
      {
        creator: "Julian Gries",
        status: "at-risk",
        assignment: "FINAL TEST — Discovery/FOMO Hook",
        hookText: "I can't believe I didn't find this sooner",
        format: "Face reaction (genuine surprise) + text overlay hook + Maket demo. This is a proven hook — just needs better execution.",
        category: "Discovery / FOMO",
        why: "Last chance. $6.10 CPM with 687 avg views. If this proven hook doesn't move the needle by next weekend, cut him.",
        urgency: "brief-now",
        messageStatus: "Send brief + deadline warning"
      },
      {
        creator: "David Cole",
        status: "at-risk",
        assignment: "FINAL TEST — Hyperbolic Gratitude Hook",
        hookText: "I could literally KISS the interior designer that showed me this",
        format: "Face reaction (over-the-top grateful) + text overlay hook + Maket demo. Needs more energy and expression than he's been giving.",
        category: "Hyperbolic Gratitude",
        why: "Last chance. Worst CPM on roster ($7.48) with 402 avg views. Giving him the proven 'KISS' hook. If no improvement by next weekend, terminate.",
        urgency: "brief-now",
        messageStatus: "Send brief + deadline warning"
      },
      {
        creator: "Kalyssa Tiffin",
        status: "watch",
        assignment: "Hook Intervention — Competitor Contrast",
        hookText: "You're telling me I spent a year using ChatGPT to design my home when I could've just done THIS",
        format: "Face reaction + text overlay hook + Maket demo. She posts a lot but nothing catches — this hook has a proven engagement rate (2.50%).",
        category: "Competitor Contrast",
        why: "156 posts but only 1,678 avg views. High volume means nothing without good hooks. The ChatGPT competitor contrast hook had the best engagement in the top 20. This is her intervention.",
        urgency: "brief-now",
        messageStatus: "Send brief this week"
      },
      {
        creator: "Mojan M",
        status: "watch",
        assignment: "Test with Proven Hook",
        hookText: "I could literally KISS the interior designer that showed me this",
        format: "Face reaction (excited/grateful) + text overlay hook + Maket demo. Keep it simple — she's still new.",
        category: "Hyperbolic Gratitude",
        why: "Only 23 posts — too early to judge. One post hit 13.3K which shows potential. Give her a proven hook so we can measure her delivery, not the hook.",
        urgency: "brief-now",
        messageStatus: "Send brief this week"
      },
      {
        creator: "Paige Eligon",
        status: "watch",
        assignment: "ChatGPT Competitor Callout (TikTok native)",
        hookText: "POV: you just found out ChatGPT can't actually design floor plans",
        format: "Face reaction (shocked realization) + text overlay hook + Maket demo. POV format is native to TikTok — lean into it.",
        category: "Competitor Callout",
        why: "7.77% engagement rate is the HIGHEST on the roster. She's TikTok-native which is valuable. Needs a hook that can scale her reach. ChatGPT callout had the best engagement in top 20.",
        urgency: "brief-now",
        messageStatus: "Send brief this week"
      },
      {
        creator: "Ihasmim Amorim",
        status: "watch",
        assignment: "Check In — Confirm Warm-Up Progress",
        hookText: "",
        format: "No hook assignment yet. First need to confirm she's actively warming up her account and has access to everything she needs.",
        category: "",
        why: "0 posts so far but may be in account ramp-up phase. Don't assign hooks until you confirm she's ready. If no response or no posts after 1.5 weeks from start, escalate to at-risk.",
        urgency: "check-in",
        messageStatus: "Send check-in message"
      }
    ]
  },

  // ── Trend Research Notes ──
  trendResearch: [
    {
      date: "2026-04-01",
      title: "Broken Floor Plan Trend",
      source: "TikTok / Palm Beach Today / PORTER",
      summary: "The 'broken floor plan' — using archways, partial walls, and elevation changes instead of fully open layouts — is the #1 TikTok design trend of 2026. Opposition to open-plan has become its own genre.",
      actionable: "Have Jett + Teya create 'The open floor plan is dead' content using Maket to generate broken floor plans.",
      priority: "high"
    },
    {
      date: "2026-04-01",
      title: "Two-Layer Hook Formula (Maket's Winning Format)",
      source: "SideShift top 10 post analysis + Terra Market Group / Cloudix Digital",
      summary: "Every top-performing Maket post uses the same two-layer formula: Layer 1 (0-1s): creator's expressive face reaction (shock, disbelief, hand over mouth). Layer 2 (0-2s): text overlay with the hook — short, punchy, creates an open loop. NO spoken hook. The silence is what makes it feel native, not like an ad. This outperforms the industry-standard 3-layer approach because it matches how Maket's audience scrolls.",
      actionable: "Enforce this format across ALL creators. Every video = expressive face + text overlay hook + Maket demo. Never open with speaking or 'Hey guys.' The text does the work.",
      priority: "high"
    },
    {
      date: "2026-04-01",
      title: "Scripted UGC Testimonials Are Dead",
      source: "Influentials 2026 / RevenueCat",
      summary: "Traditional 'Hey guys, I just found this amazing app...' UGC is now predictable and ineffective. Replaced by: skits, expert commentary, pattern-interrupt videos, pure demos. 73% of viewers leave before second 4 if video opens with generic greeting.",
      actionable: "NEVER let creators open with 'Hey guys' or any preamble. Start mid-action or mid-statement. Enforce across all creators.",
      priority: "high"
    },
    {
      date: "2026-04-01",
      title: "ADU / Income Suite Content Gap",
      source: "Renovation trend research",
      summary: "Accessory dwelling units (backyard suites, basement apartments) are trending due to housing costs. Financial motivation (rental income) drives higher engagement than aesthetics. Maket's AI floor plan generation makes it a natural fit for ADU planning content.",
      actionable: "Give Kyle Poselero the ADU angle — his builder persona fits. Test: 'POV: AI just solved the housing crisis in your backyard'",
      priority: "medium"
    },
    {
      date: "2026-04-01",
      title: "Competitor Gap is Massive",
      source: "Competitor analysis",
      summary: "No AI home design tool has a serious, systematic TikTok/IG creator operation. Arch AI has 3.6K followers. REimagineHome, HomeDesignsAI, Planner5D have minimal creator strategies. Maket's UGC pipeline is a significant first-mover advantage.",
      actionable: "Double down on creator volume. Consider hiring 3-5 new creators to maintain the competitive moat before competitors catch on.",
      priority: "medium"
    },
    {
      date: "2026-04-01",
      title: "Trending Audio for Home Design Content",
      source: "Buffer / MeetEdgar / Kapwing",
      summary: "Don Toliver 'E85' (aesthetic reveals), Rihanna 'Kiss It Better' (POV/slow-mo), Harry Styles 'Aperture' (cinematic). Pure demo content should use trending audio for discoverability boost.",
      actionable: "Brief Miftahol on trending audio for her screen recording demos. Audio drives 15-20% higher discoverability on TikTok.",
      priority: "low"
    }
  ]
};
