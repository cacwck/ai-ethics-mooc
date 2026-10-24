/* 學習台 — Global MOOC on the Ethics of AI
 * 資料核實日期：2026-10-24
 * 來源：https://www.coursera.org/learn/global-mooc-on-the-ethics-of-ai
 *        https://www.unesco.org/en/articles/unesco-and-lg-ai-research-launch-global-mooc-ethics-ai
 *
 * 誠實聲明：
 *  - module 標題、影片標題、影片分鐘、閱讀／作業標題、時長＝課程頁原文（逐字）。
 *  - 「學習重點」「自測」「詞彙」＝自製學習輔助筆記，唔係課程原文，亦唔代表講師立場。
 *  - 個別案例背景用公開資料補充，並已標明「背景」。
 */
window.COURSE = {
  id: "unesco-ai-ethics",
  title: "Global MOOC on the Ethics of AI",
  provider: "UNESCO × LG AI Research",
  platform: "Coursera",
  url: "https://www.coursera.org/learn/global-mooc-on-the-ethics-of-ai",
  level: "Intermediate（建議具備基本 AI 知識）",
  rating: "4.8 / 5（160 個評價，2026-10 擷取）",
  launched: "2026-07-20（首爾發表）",
  duration: "官方 header：1 week at 10 hours a week；官方 blog：9 hours；module 標示相加約 11 小時",
  cost: "Coursera 課程頁 FAQ：全部功能免費，完成後可獲證書（唔屬 audit-only 模式）",
  assessed: "2 個 assignment，AI Graded；M10 另有 End-of-Course Graded Quiz",
  langNote: "Taught in English；另提供 12 種語言（課程頁 2026-10-24）",
  docs: [
    { t: "UNESCO 公告：launch of the Global MOOC", u: "https://www.unesco.org/en/articles/unesco-and-lg-ai-research-launch-global-mooc-ethics-ai" },
    { t: "UNESCO：Empowering Minds, Transforming Lives", u: "https://www.unesco.org/en/articles/empowering-minds-transforming-lives-global-mooc-ethics-ai" },
    { t: "Coursera Blog 公告（2026-07-19）", u: "https://blog.coursera.org/unesco-partners-with-coursera-and-launches-free-ai-ethics-course" },
    { t: "UNESCO Recommendation on the Ethics of AI（2021）", u: "https://www.unesco.org/en/articles/recommendation-ethics-artificial-intelligence" }
  ],
  modules: [
    {
      n: 1,
      title: "Foundations of AI Ethics",
      zh: "倫理基礎",
      time: "1 小時",
      videos: [
        { t: "Introduction to the Course", m: 4 },
        { t: "Video 1: Why does ethics matter in AI?", m: 13 },
        { t: "Video 2: What do we mean by ethics?", m: 15 },
        { t: "Video 3: Ethics by Design and Ethics in Use", m: 12 }
      ],
      readings: [
        { t: "Module 1: Glossary", m: 10 },
        { t: "Module 1: Reading Materials", m: 10 }
      ],
      points: [
        "分清三件事：倫理（應該點做）、法律（最低可強制要求）、個人偏好。合規唔等於倫理——法律通常滯後於技術。",
        "課程用兩條線貫穿整個 AI lifecycle：ethics by design（設計階段就把價值嵌入）同 ethics in use（使用階段持續把關）。兩者缺一都會出事。",
        "Lifecycle：design → development → deployment → use。責任隨階段轉移：開發者管資料與模型選擇，部署者管情境設定與監察，使用者管用途邊界。",
        "問「呢個系統幫邊個、傷害邊個、有冇人無得反對」比問「有冇違法」更早發現問題。",
        "倫理要落地就必須有機制：impact assessment、review gate、logging、申訴渠道。冇機制的倫理語言只係公關。"
      ],
      quiz: [
        { q: "用自己嘅說話，分開講 ethics、law 同個人偏好三者嘅分別，各舉一個 AI 例子。", a: "參考框架：law 係可強制的最低標準（例如 GDPR 的資料最小化義務）；ethics 係法律未覆蓋但會造成傷害的範圍（例如推薦系統對青少年注意力的影響）；個人偏好係口味（例如唔想用語音助理），唔構成對他人的正當要求。" },
        { q: "同一個 AI 系統，ethics by design 同 ethics in use 分別由邊個角色負責？", a: "by design：產品／工程／資料團隊在需求與架構階段決定（資料來源、預設值、限制）；in use：部署者與使用者（情境是否合適、監察、覆核、停用機制）。" },
        { q: "揀一個你熟悉嘅 AI 用例，指出 lifecycle 中邊個階段最容易被跳過。", a: "通常係 deployment 之後的持續監察與 use 階段的用途邊界——上線後缺少效能與傷害監測，或使用者把系統用在原本設計範圍以外。" }
      ],
      terms: [
        { k: "Ethics by design", v: "在設計與開發階段就把倫理要求寫入規格（資料來源限制、預設設定、可解釋性），而非事後補救。" },
        { k: "Ethics in use", v: "系統上線後在使用情境中持續把關：適用性、監察、人類覆核、停用與申訴。" },
        { k: "AI lifecycle", v: "由問題定義、資料收集、模型開發、部署到使用與退役的完整鏈條；責任分配隨階段改變。" }
      ]
    },
    {
      n: 2,
      title: "Human-AI Interaction",
      zh: "人機互動",
      time: "1 小時",
      videos: [
        { t: "Video 1: Introducing Human-AI Interaction in Everyday Life: The Amina Health App Case Study", m: 13 },
        { t: "Video 2: Humanization as a design imperative - design for flourishing", m: 9 },
        { t: "Video 3: Best Practices & Tools for Ethical Human-AI Interaction", m: 8 }
      ],
      readings: [
        { t: "Module 2: Glossary", m: 10 },
        { t: "Module 2: Reading Materials", m: 10 }
      ],
      points: [
        "課程用 Stanford AI Ethics Toolkit 把抽象原則接上真實設計決策：每個設計選擇都係一次價值取捨。",
        "「Humanization as a design imperative」講嘅係：設計目標唔應只係效率，而係讓人能夠 flourishing（有能力、有選擇、不被削弱）。",
        "Amina Health App 案例係健康類助理：要留意建議嘅準確性邊界、使用者過度信任、以及出事時的責任歸屬。",
        "實務檢查清單：預設值是否保守、是否有退出／關閉機制、錯誤時如何告知、使用者能否理解系統在做什麼。",
        "Automation bias（自動化偏見）係核心風險：人會傾向相信系統輸出，尤其在高工時、高壓力情境下，人類覆核形同虛設。"
      ],
      quiz: [
        { q: "為何「有人類在迴路（human-in-the-loop）」唔自動等於安全？", a: "若人類無時間、無資訊、無權限否決，覆核只係橡皮圖章；automation bias 會令操作員傾向順從系統建議。有效覆核需要：足夠時間、可理解的依據、真實的否決權、以及覆核記錄。" },
        { q: "用 Amina Health App 類型嘅情境，列出三個你會在設計評審提出的問題。", a: "例：(1) 系統建議的置信度如何向使用者呈現？(2) 建議錯誤時的補救路徑與責任誰屬？(3) 高风险情況（例如症狀指向急症）是否有強制轉介而非繼續對話？" },
        { q: "「Design for flourishing」同「design for engagement」最大衝突在邊？", a: "前者以使用者長期能力與選擇為目標，後者以停留時間／互動量為目標；當兩者衝突時，engagement 指標通常勝出，因此需要把 flourishing 寫成可量度的驗收條件。" }
      ],
      terms: [
        { k: "Stanford AI Ethics Toolkit", v: "把倫理原則轉為設計問題與檢查項的工具集，課程用來連接原則與實務決策。" },
        { k: "Humanization", v: "以人的能力、尊嚴與長期福祉為設計目標，而非只優化效率或互動量。" },
        { k: "Automation bias", v: "人傾向過度信任自動化輸出，減少自身判斷與質疑。" },
        { k: "Human-in-the-loop", v: "在決策流程中保留人類審核；有效性取決於時間、資訊與否決權。" }
      ]
    },
    {
      n: 3,
      title: "Safety & Security",
      zh: "安全與保安",
      time: "1 小時",
      videos: [
        { t: "Video 1: Introducing Safety & Security in AI & Everyday Dimensions", m: 13 },
        { t: "Video 2: Case Study: The Uber Autonomous Vehicle Fatality", m: 19 },
        { t: "Video 3: Testing & Evaluation Frameworks for AI Safety and Security", m: 16 },
        { t: "Video 4: Best Practices and Tools for Operationalising Safety & Security in AI", m: 15 }
      ],
      readings: [
        { t: "Module 3: Glossary", m: 10 },
        { t: "Module 3: Reading Materials", m: 10 }
      ],
      points: [
        "Safety（非惡意失誤、系統失效）同 Security（惡意攻擊、濫用）係兩條不同的風險線，測試方法同負責團隊都唔同。",
        "風險為本測試：按傷害嚴重度與發生機率排序，而唔係追求「全部測一次」。",
        "背景（公開調查記錄）：2018-03-18 美國 Tempe，Uber 測試中的自駕車撞死行人 Elaine Herzberg；NTSB 2019 年報告指可能成因包括安全員分心、Uber 安全文化與風險評估不足，以及系統未正確識別該行人。課程具體分析角度以影片為準。",
        "測試與評估框架要覆蓋：edge case、分布外輸入、感測器退化、對抗性輸入、以及人機交接（handover）時間。",
        "落地做法：安全案例（safety case）、獨立評估、上線閘門、事故通報與回滾機制。"
      ],
      quiz: [
        { q: "同一個失效（例如辨識不到行人），你會分別用 safety 同 security 的框架怎樣處理？", a: "safety：找出感測與感知的效能邊界、補充測試情境、改善交接設計與監察；security：檢查是否有對抗性手法可誘發同一失效（貼紙、強光、欺騙性物件），並加入入侵偵測與輸入驗證。" },
        { q: "為何「測試通過」唔等於安全？", a: "測試只覆蓋已想到的情境；真實環境的分佈會漂移，且人機交接、維護、更新都會引入新風險。需要持續監測與上線後的通報機制。" },
        { q: "設計一個上線閘門（gate），列出三個必須通過的條件。", a: "例：(1) 在定義的 ODD（操作設計範圍）內達到指定效能門檻；(2) 失效模式有可接受的降級行為與人類接管時間；(3) 事故通報、回滾與停用流程已演練。" }
      ],
      terms: [
        { k: "Safety vs Security", v: "Safety＝非故意失效造成的傷害；Security＝故意攻擊或濫用造成的傷害。" },
        { k: "Risk-based testing", v: "按傷害嚴重度與機率分配測試資源，而非平均覆蓋。" },
        { k: "ODD（操作設計範圍）", v: "系統被設計為可安全運作的情境邊界（天氣、道路、時段等）。" },
        { k: "Handover", v: "自動作業轉交人類接管的過程；時間不足是最常見的失效點。" }
      ]
    },
    {
      n: 4,
      title: "Fairness, Non-Discrimination & Inclusion in AI",
      zh: "公平、反歧視與共融",
      time: "1 小時",
      videos: [
        { t: "Video 1: Introducing Fairness, Non-Discrimination and Inclusion in Everyday AI Use", m: 18 },
        { t: "Video 2: Case Study: Fairness in Child Welfare Screening AI", m: 14 },
        { t: "Video 3: Checking AI Outcomes by Demographic Group", m: 14 },
        { t: "Video 4: Best Practices & Tools for Operationalising Fairness, Non-Discrimination & Inclusion in AI", m: 11 }
      ],
      readings: [
        { t: "Module 4: Glossary", m: 10 },
        { t: "Module 4: Reading Materials", m: 10 }
      ],
      points: [
        "公平唔止一個定義：人口比例均等（demographic parity）、機會均等、錯誤率均等……彼此在數學上可能互相衝突，要先講清楚用邊個標準、為邊個群體。",
        "第一步永遠係界定受影響群體同傷害類型，而唔係先揀指標。",
        "Child welfare screening 案例的核心張力：預測「風險」會把歷史偏見（例如社福介入本身就集中於某些社區）編碼成特徵。",
        "按人口群組檢查結果（Video 3）要同時看：選中率、假陽性、假陰性、以及錯誤的代價是否對等。",
        "共融（inclusion）唔止是被準確分類，還包括能否使用、能否申訴、能否退出。"
      ],
      quiz: [
        { q: "為何「模型唔用種族變數」仍然可能構成歧視？", a: "代理變數（郵區、語言、就學記錄、消費行為）與受保護特徵高度相關，模型可間接重建群體身份；加上訓練標籤本身反映歷史偏見。" },
        { q: "在兒童福利篩查情境，假陽性同假陰性的代價分別係什麼？", a: "假陽性：家庭被錯誤介入、兒童被不必要地帶離，傷害不可逆；假陰性：真正高風險個案被漏掉。兩者代價不對等，因此單看整體準確率會誤導。" },
        { q: "寫出一個可驗收的公平性要求（而非口號）。", a: "例：在定義的四個人口群組中，假陰性率差距不超過 X 個百分點，且每季重新量度；超出即觸發人工覆核與模型檢視。" }
      ],
      terms: [
        { k: "Demographic parity", v: "各群組被選中（正分類）的比例相等。" },
        { k: "Equal opportunity", v: "各群組中真正符合條件者的被選中率相等（真陽性率相等）。" },
        { k: "Proxy variable", v: "與受保護特徵高度相關的替代變數，可間接引入歧視。" },
        { k: "Disparate impact", v: "表面上中立的規則，實際對某群體造成不成比例的負面效果。" }
      ]
    },
    {
      n: 5,
      title: "Privacy, Data Protection and Data Governance in AI",
      zh: "私隱、資料保護與資料治理",
      time: "2 小時",
      videos: [
        { t: "Video 1: Introducing Privacy, Data Protection and Data Governance in Everyday AI Use", m: 12 },
        { t: "Video 2: Case Study: Italy's 2023 ChatGPT Ban", m: 14 },
        { t: "Video 3: Data Minimization: Limiting What AI Systems Collect and Retain", m: 13 },
        { t: "Video 4: Best Practices & Tools for Operationalising Privacy, Data Protection and Data Governance in AI", m: 16 }
      ],
      readings: [
        { t: "Module 5: Glossary", m: 10 },
        { t: "Module 5: Reading Materials", m: 10 }
      ],
      assignment: { t: "End-of-Module Exercise: Responsible data practices", m: 30 },
      points: [
        "三個層次要分開：privacy（個人權利與期望）、data protection（法律義務，例如 GDPR）、data governance（組織內的決策權與流程）。",
        "背景（公開記錄）：2023 年 3 月意大利 Garante 曾對 ChatGPT 採取臨時限制措施，理由涉及個人資料處理的法律基礎、資料外洩通知與年齡驗證等問題；同年 4 月解除並附帶要求。課程具體分析角度以影片為準。",
        "Data minimisation：只收集必要資料、只保留必要時間。對 LLM 尤其關鍵——訓練資料一旦吸收，刪除幾乎不可能。",
        "要問：法律基礎是什麼？保留期多長？有無再識別風險？模型記憶（memorisation）如何測試？",
        "治理落地：資料分級、存取控制、處理記錄（ROPA）、DPIA、供應商條款、以及刪除請求的技術可行性。"
      ],
      quiz: [
        { q: "為何「已匿名化」講法在 LLM 情境特別危險？", a: "模型可透過記憶或組合推理重建訓練資料；偽匿名資料只要保留連結鍵就仍屬個人資料；且生成輸出可能洩漏片段。" },
        { q: "列出三個 data minimisation 的具體工程做法。", a: "例：(1) 訓練前做欄位必要性審查並丟棄非必要欄位；(2) 設定保存期限並自動清除；(3) 以雜湊／聚合取代原始值，並限制推理日誌保留。" },
        { q: "意大利 ChatGPT 案對企業內部治理有何啟示？", a: "監管會以「是否說得出法律基礎、是否告知、是否保護未成年人」作切入點；因此需要可追溯的處理記錄、清晰的告知文本與年齡／風險控制，而非只靠模型供應商的合規聲明。" }
      ],
      terms: [
        { k: "Data minimisation", v: "只收集與目的相符的必要資料，並限制保留期。" },
        { k: "Purpose limitation", v: "資料只可用於收集時明示的目的。" },
        { k: "DPIA", v: "資料保護影響評估：高風險處理前的強制性風險評估。" },
        { k: "Memorisation", v: "模型記住並可重現訓練資料片段的现象，屬私隱風險。" }
      ]
    },
    {
      n: 6,
      title: "Transparency, Explainability and Accountability (TEA)",
      zh: "透明、可解釋與問責",
      time: "1 小時",
      videos: [
        { t: "Video 1: Introducing Transparency, Explainability and Accountability in AI", m: 12 },
        { t: "Video 2: Case Study: AI-Assisted Loan Decisions", m: 8 },
        { t: "Video 3: Explainability and the Black Box Problem", m: 10 },
        { t: "Video 4: Best Practices & Tools for Operationalising Transparency, Explainability and Accountability", m: 12 }
      ],
      readings: [
        { t: "Module 6: Glossary", m: 10 },
        { t: "Module 6: Reading Materials", m: 10 }
      ],
      points: [
        "TEA 係三件相扣的事：透明（講明系統存在與如何運作）、可解釋（對受影響者給出可理解的依據）、問責（有人要負責、有救濟途徑）。",
        "有透明但無問責＝只係公告；有問責但無可解釋＝無法申訴。",
        "解釋要按受眾分層：開發者（特徵重要性、模型限制）、監管者（文件、測試、審計）、受影響者（拒絕理由、如何改變、如何上訴）。",
        "背景：貸款決策係典型高風險場景，多個司法管轄區要求對拒絕提供具體理由（adverse action notice）。",
        "黑箱問題的實務折衷：不一定需要全局可解釋，但必須有局部解釋、模型文件（model card）、以及人類覆核路徑。"
      ],
      quiz: [
        { q: "對同一個信貸模型，寫出三種受眾各自需要的「解釋」。", a: "申請人：拒絕的主要原因與可改變的行動（例如負債比率）；監管者：模型驗證、偏差測試、資料來源與治理紀錄；內部工程：特徵貢獻、分佈漂移、已知失效模式。" },
        { q: "為何「提供 SHAP 值」通常不足以構成可解釋？", a: "SHAP 是技術歸因，未說明因果，也未必對非技術使用者可理解；亦可能被用來事後合理化任何決策。需要配合可理解的語言、可質疑的依據與申訴機制。" },
        { q: "設計一個問責機制，列出必要元素。", a: "指定負責人（角色而非部門）、決策與覆核記錄、申訴與更正流程、定期審計、以及在發現傷害時的停用／回滾權限。" }
      ],
      terms: [
        { k: "Transparency", v: "公開系統的存在、用途、資料來源與限制。" },
        { k: "Explainability", v: "能對特定決策給出可理解的依據，並按受眾調整深度。" },
        { k: "Accountability", v: "明確負責主體、可追溯記錄與有效救濟。" },
        { k: "Model card", v: "標準化模型說明文件：用途、訓練資料、評估結果、限制。" }
      ]
    },
    {
      n: 7,
      title: "AI, Environment & Sustainability",
      zh: "AI、環境與可持續性",
      time: "1 小時",
      videos: [
        { t: "Video 1: Introducing AI's Environmental and Sustainability Impact in Everyday Life", m: 14 },
        { t: "Video 2: Case Study: Building a Large AI Data Centre", m: 12 },
        { t: "Video 3: Materiality & Impact Hotspots in AI's Environmental Footprint", m: 9 },
        { t: "Video 4: Best Practices & Tools for Operationalising AI Sustainability", m: 10 }
      ],
      readings: [
        { t: "Module 7: Glossary", m: 10 },
        { t: "Module 7: Reading Materials", m: 10 }
      ],
      points: [
        "環境影響貫穿整個 lifecycle：礦物開採與硬件製造（embodied carbon）、訓練用電、推理用電、冷卻用水、以及報廢處理。",
        "推理（inference）往往是總能耗的主體，因為它每天持續發生；只看訓練成本會低估影響。",
        "Materiality（重大性）決定你應該量度什麼：對業務與環境都重要的項目才值得納入報告，避免堆砌無關數字。",
        "Impact hotspots：用電碳強度（電網組合）、冷卻方式與地點水壓力、以及硬件更換週期。",
        "落地做法：選擇低碳區域與時段、提高利用率（batch、蒸餾、量化）、量度與披露、把碳成本納入模型選擇。"
      ],
      quiz: [
        { q: "為何「訓練一次」的碳排放唔足以代表一個 AI 產品的環境成本？", a: "推理會隨使用者數量與使用頻率線性增長，長期總量常超過訓練；另外硬件製造與冷卻用水不在訓練數字內。" },
        { q: "什麼是 materiality？舉一個 AI 情境的例子。", a: "重大性＝對環境與業務同時重要的影響項目。例：在缺水地區建數據中心，用水量同時是環境與營運風險，因此屬重大項目；而辦公室紙張用量對 AI 服務則屬非重大。" },
        { q: "列出兩個可量度的減碳手段及其副作用。", a: "例：(1) 時間轉移（在低碳時段跑批次）——副作用是延遲；(2) 模型蒸餾／量化——副作用是準確度與公平性可能改變，需重新評估。" }
      ],
      terms: [
        { k: "Embodied carbon", v: "硬件製造與運輸過程中的碳排放，與用電無關。" },
        { k: "Inference", v: "模型上線後每次回應所消耗的算力與能源。" },
        { k: "Materiality", v: "對環境與業務同時具重大性的影響項目，用於決定量度與披露範圍。" },
        { k: "PUE", v: "數據中心總用電除以 IT 設備用電，衡量冷卻與配電效率。" }
      ]
    },
    {
      n: 8,
      title: "Proportionality & Do No Harm",
      zh: "比例原則與不傷害",
      time: "1 小時",
      videos: [
        { t: "Video 1: Introducing Proportionality and Do No Harm in Everyday AI Use", m: 9 },
        { t: "Video 2: Case Study: Facial Recognition in UK Schools", m: 9 },
        { t: "Video 3: Ex-Ante Context-Based Risk Analysis (COBRA)", m: 9 },
        { t: "Video 4: Best Practices & Tools for Operationalising Proportionality and Do No Harm in AI", m: 11 }
      ],
      readings: [
        { t: "Module 8: Glossary", m: 10 },
        { t: "Module 8: Reading Materials", m: 10 }
      ],
      points: [
        "比例原則三問：目的正當嗎？手段能達成目的嗎（必要性）？代價與收益相稱嗎（狹義比例）？",
        "風險為本治理：風險越高，要求的證據、監察與人類覆核越嚴；低風險不應被同等對待，否則資源錯配。",
        "背景：英國校園使用臉部辨識（例如學生付款／考勤）曾引起監管機構與家長關注，爭議集中於未成年人、同意是否真實自由、以及是否有較少侵入性的替代方案。課程具體結論以影片為準。",
        "COBRA = Ex-Ante Context-Based Risk Analysis：在部署前按具體情境做風險分析，而唔係套用通用風險等級。",
        "Do no harm 在實務上要寫成可驗收條件：可接受的誤差上限、必須存在的替代方案、以及一旦超標即停用的門檻。"
      ],
      quiz: [
        { q: "用比例原則分析「校園臉部辨識付款」：目的、必要性、相稱性各怎樣評？", a: "目的：加快付款／減少遺失現金，屬正當但非重大；必要性：有無更低侵入性替代（卡、手環、PIN）——若有，則手段不必要；相稱性：涉及未成年人生物特徵，長期不可更改，代價高於便利收益。" },
        { q: "COBRA 同一般「風險等級分類」最大分別？", a: "COBRA 要求按具體部署情境（誰受影響、什麼後果、什麼替代方案）做事前分析，而唔係單靠抽象風險類別決定要求。" },
        { q: "寫出一條「不傷害」的可驗收門檻。", a: "例：在試點中若任何群體的錯誤拒絕率高於基線 X 個百分點，或出現任一嚴重傷害個案，即暫停並重新評估。" }
      ],
      terms: [
        { k: "Proportionality", v: "手段與目的相稱：正當目的、必要性、代價與收益平衡。" },
        { k: "Risk-based governance", v: "按風險高低調節要求強度（評估、監察、覆核、文件）。" },
        { k: "COBRA", v: "Ex-Ante Context-Based Risk Analysis：部署前按情境做風險分析的方法，課程 M8 介紹。" },
        { k: "Less intrusive alternative", v: "能達成同一目的但對權利影響較小的替代方案。" }
      ]
    },
    {
      n: 9,
      title: "Human Autonomy, Meaningful Work, and the AI Economy",
      zh: "人類自主、有意義工作與 AI 經濟",
      time: "1 小時",
      videos: [
        { t: "Video 1: Introducing Human Autonomy in the AI Economy", m: 10 },
        { t: "Video 2: Case Study: The MiDAS Unemployment Fraud Detection System", m: 17 },
        { t: "Video 3: Meaningful Work in the AI Economy", m: 18 },
        { t: "Video 4: Best Practices & Tools - Operationalising Human Autonomy and Meaningful Work", m: 13 }
      ],
      readings: [
        { t: "Module 9: Glossary", m: 10 },
        { t: "Module 9: Reading Materials", m: 10 }
      ],
      points: [
        "人類自主（autonomy）唔止係「有人最後簽名」，而係當事人有實際資訊、時間與能力去反對。",
        "背景：美國密歇根州 MiDAS 失業救濟詐騙偵測系統（2013 起）大規模誤判，大量市民被指詐騙並被追討款項，後來要退款並於 2017 年達成和解。核心問題係自動化判定＋極低人工覆核＋举证責任反轉。",
        "「有意義工作」的判準：技能能否累積、有無判斷空間、是否被降格為餵數據的環節。",
        "AI 導入工作的三種失敗模式：去技能化（deskilling）、監控過度、以及把行政負擔轉嫁給最弱勢的服務對象。",
        "落地做法：人類覆核要有資源、錯誤要有快速更正通道、受影響者有權得知並申訴、以及定期檢查自動化決定的上訴成功率。"
      ],
      quiz: [
        { q: "MiDAS 案例中，哪三個設計決定把風險放大？", a: "自動化判定後大量發出詐騙通知、人工覆核資源嚴重不足、以及把證明自己清白的責任放在當事人身上。" },
        { q: "「有意義工作」可以用什麼指標觀察？", a: "例：員工對例外情況的判斷權比例、技能培訓時數、被系統建議採納率與可否決率、以及工作被拆解為單一動作的程度。" },
        { q: "設計一條申訴流程，確保 autonomy 不是口號。", a: "例：通知必須列明理由與證據、提供 30 日上訴期、上訴期間暫緩追討、由獨立於原決定單位的人員審核、並公布上訴成功率。" }
      ],
      terms: [
        { k: "Human autonomy", v: "當事人能在掌握資訊與資源下作出實質選擇，並可否決自動化決定。" },
        { k: "Deskilling", v: "工作被拆解為低判斷、低技能的环节，員工能力無法累積。" },
        { k: "Meaningful work", v: "具備判斷空間、技能成長與目的感的工作安排。" },
        { k: "Burden shifting", v: "把舉證或行政負擔轉移到受影響者身上（常见於自動化福利審查）。" }
      ]
    },
    {
      n: 10,
      title: "Global AI Governance",
      zh: "全球 AI 治理",
      time: "1 小時",
      videos: [
        { t: "Video 1: Introducing Global AI Governance", m: 11 },
        { t: "Video 2: Case Study: Expanding a GenAI Assistant Across Markets", m: 11 },
        { t: "Video 3: The Forces that Shape AI Governance", m: 11 }
      ],
      readings: [
        { t: "Module 10: Glossary", m: 10 },
        { t: "Module 10: Reading Materials", m: 10 }
      ],
      assignment: { t: "End-of-Course Graded Quiz", m: 30 },
      points: [
        "治理格局係拼圖而非單一法規：歐盟以風險分級立法（AI Act）、美國以部門監管＋自願框架（NIST AI RMF）、中國以算法與生成式服務管理規定、國際層面有 UNESCO 2021 年《人工智能倫理問題建議書》（193 個成員國通過，非約束性）。",
        "跨境三大難題：管轄權衝突與域外效力、資料跨境流動、以及同一模型在不同市場要符合不同披露要求。",
        "Video 2 的 GenAI 助理跨市場案例，核心係「一個產品、多套規則」：語言在地化之外，還要處理內容政策、資料本地化與使用者救濟。",
        "Video 3 講塑造治理的力量：地緣政治競爭、產業遊說、公民社會與學術、標準組織（ISO/IEC）、以及重大事件驅動的監管窗口。",
        "UNESCO 的 RAM（Readiness Assessment Methodology）用於評估一個國家在制度、能力與問責上的準備程度。",
        "實務落地：建立監管地圖（哪個市場、哪些義務、哪個負責人）、把義務轉成工程控制、以及保留可審計證據。"
      ],
      quiz: [
        { q: "同一個 GenAI 產品要進入歐盟、美國、中國市場，列出三類必須分別處理的義務。", a: "例：歐盟的風險分類與透明度／技術文件義務；美國的部門監管（例如金融、醫療）加上 FTC 的不實陳述風險；中國的生成式服務備案與內容安全要求。三地對資料跨境與日誌保留的要求亦不同。" },
        { q: "UNESCO 2021 建議書的法律地位是什麼？", a: "由 193 個成員國通過的國際規範性文件，但屬非約束性（soft law）；影響力來自國家採納、政策對照與 RAM 評估，而非直接執法。" },
        { q: "為何「等監管清楚先做」通常係錯的策略？", a: "監管會以既有事實（你有冇評估、有冇文件、有冇救濟）作判斷；等到立法通過才建立治理能力通常趕不上，且跨境市場會先後出現不同要求。" }
      ],
      terms: [
        { k: "UNESCO Recommendation on the Ethics of AI (2021)", v: "193 個成員國通過的國際倫理規範文件，非約束性；課程的價值基礎。" },
        { k: "Risk-based approach", v: "按風險等級施加不同義務的監管思路（歐盟 AI Act 為代表）。" },
        { k: "RAM", v: "Readiness Assessment Methodology：UNESCO 用以評估國家 AI 治理準備程度的方法。" },
        { k: "Soft law", v: "非直接可強制執行的國際規範，靠政策採納與同行壓力生效。" }
      ]
    }
  ]
};