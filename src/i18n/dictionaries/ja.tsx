import type { Dictionary } from "./index";

export const dictionary: Dictionary = {
  metadata: {
    defaultTitle: "Aliénor AI - あなたの会社を知るAI",
    titleTemplate: "%s - Aliénor AI",
    description:
      "企業の中心に組み込まれたAIアシスタント。社内の文書・ツール・チームを理解し、あらゆる質問に安全に答えます。",
  },
  localeSwitcher: {
    label: "言語",
    languages: {
      fr: "フランス語",
      en: "英語",
      ja: "日本語",
    },
  },
  navbar: {
    brand: "Aliénor AI",
    home: "ホーム",
    links: [
      { href: "/company", label: "私たちの使命" },
      { href: "/pricing", label: "料金" },
      { href: "/blog", label: "ブログ" },
    ],
    login: "ログイン",
  },
  footer: {
    cta: {
      title: "チームの生産性を高めましょう",
      lead: "社内の専門家として24時間365日対応。サポート・人事・営業・プロダクトの質問に即座に回答し、チームの時間を奪いません。",
      helper:
        "デモ環境をリクエストして自社データでお試しください。データは機密扱いで、試用後に削除されます。",
      button: "デモを予約",
    },
    description:
      "企業の中心に組み込まれたAIアシスタント。社内の文書・ツール・チームを理解し、あらゆる質問に安全に答えます。",
    sitemap: {
      product: "製品",
      pricing: "料金",
      blog: "ブログ",
      company: "企業情報",
      mission: "使命",
      careers: "採用",
      support: "サポート",
      helpCenter: "ヘルプセンター",
      faq: "FAQ",
      legal: "リーガル",
      terms: "利用規約",
      privacy: "プライバシーポリシー",
      careersDisabledLabel: "採用",
    },
  },
  home: {
    hero: {
      title: "社内のすべての情報を",
      highlight: "数秒で",
      description: (
        <>
          社内データを一元化し、必要な情報へすぐにアクセス
          <br className={"xs:block hidden"} />
          <span className="xs:font-medium">
            主権性とセキュリティを備えたAIが<br className={"xs:hidden block"} />
            <span className={"max-xs:font-medium"}>ビジネスを支えます。</span>
          </span>
        </>
      ),
      bullets: ["高度なセキュリティ", "日本国内100%ホスティング", "SecNumCloud認証"],
      badges: ["すぐに使える", "24時間で導入", "即効ROI"],
      primaryCta: "デモを見る",
      secondaryCta: "料金を見る",
    },
    integrationsHeading: "職場にフィットする設計",
    bentoCards: [
      {
        eyebrow: "Networking",
        title: "会社を知り尽くしたチャットボット",
        description:
          "ファイル・議事録・業務ツールにある情報を数秒で検索し、必要な答えを届けます。",
      },
      {
        eyebrow: "Integrations",
        title: "日常のツールと連携",
        description:
          "メール、ドライブ、CRM、プロジェクト管理など、普段使いのツールと簡単に接続できます。",
      },
      {
        eyebrow: "Meetings",
        title: "専用に最適化したエンジン",
        description:
          "社内データを正確に理解・処理するために特別に設計されたAIエンジンです。",
      },
      {
        eyebrow: "Engagement",
        title: "すぐに使えるAIエージェント",
        badgeSoon: "まもなく提供",
        description:
          "人事対応、社内リクエスト、ファイル更新、通知などを自動化。バックグラウンドで動き、複雑な設定は不要です。",
      },
    ],
  },
  testimonials: {
    heading: "すべての回答にセキュリティと主権性を",
    items: [
      {
        icon: "globe",
        name: "主権性",
        title: "日本国内100%のホスティング",
        quote: "サーバーは東京に設置。データが国外に出ることはありません。",
      },
      {
        icon: "scale",
        name: "コンプライアンス",
        title: "厳格な欧州基準",
        quote:
          "ISO・SOC・SecNumCloudなど最高水準のセキュリティ基準を満たし、GDPRを法以上に遵守します。",
      },
      {
        icon: "lock",
        name: "機密性",
        title: "強固な保護",
        quote:
          "データは送受信時も保存時も保護され、業界最高レベルのセキュリティ実践を採用しています。",
      },
      {
        icon: "eye",
        name: "透明性",
        title: "隠れた利用はゼロ",
        quote: "外部モデルの学習や商業利用のためにデータを使うことは決してありません。",
      },
      {
        icon: "adjustments",
        name: "コントロール",
        title: "すべては貴社の管理下に",
        quote:
          "何を共有し、どの連携を許可するかを貴社が決定。主導権は常にあなたにあります。",
      },
      {
        icon: "check",
        name: "信頼性",
        title: "常に稼働",
        quote:
          "大規模障害時でも利用できるよう設計された回復力の高いインフラです。",
      },
    ],
  },
  useCases: {
    heading: "Aliénorが日常業務を支える方法",
    callout: {
      text: "時間を取り戻し、会社の生産性を高めましょう。",
      ctaLabel: "私たちの使命",
      href: "/company",
    },
    items: [
      {
        img: "/testimonials/commercial.webp",
        name: "商談準備",
        title: "営業ユースケース",
        quote: "仕様書やCRMの要点をAIに聞くだけ。数秒で万全の準備が整います。",
      },
      {
        img: "/testimonials/rh.webp",
        name: "社内ポリシーへのアクセス",
        title: "人事ユースケース",
        quote: "適切な人事ポリシーを即座に提示し、社員の質問に時間をかけず答えます。",
      },
      {
        img: "/testimonials/amy-chase.jpg",
        name: "重複やミスを防ぐ",
        title: "ファイナンス／経営",
        quote: "最新の財務ドキュメントを参照。回答は検証済み・出典付きで、ミスを防ぎます。",
      },
      {
        img: "/testimonials/support.webp",
        name: "チケット解決を高速化",
        title: "サポートユースケース",
        quote: "ナレッジベースから最適な回答を提示し、チケット解決を大幅に短縮します。",
      },
      {
        img: "/testimonials/it.webp",
        name: "技術情報をすぐに取得",
        title: "技術／IT",
        quote: "ITガイドラインや手順をワンクリックで確認。ドキュメント探索に時間をかけません。",
      },
    ],
  },
  pricing: {
    metadata: {
      title: "料金",
      description:
        "あらゆる規模の企業がAliénorで社内情報へのアクセスを高速化しています。自社に合うプランを選び、今日から始めましょう。",
    },
    header: {
      title: "あなたに合わせて選べる料金プラン。",
      lead: "セキュリティとパフォーマンスを満たす3つのプラン。今すぐ無料トライアルを開始しましょう。",
      ribbon: "すぐに使える • 24時間で導入 • 即効ROI",
    },
    popularBadge: "一番人気",
    priceSuffix: "/月",
    tiers: [
      {
        name: "Aliénor",
        slug: "alienor",
        description: "創業者・少人数チームが日常業務にAIを取り入れるのに最適。",
        priceMonthly: 149,
        href: "/pricing#book",
        highlights: [
          { description: "チーム3名まで" },
          { description: "アクティブ文書10件まで" },
          { description: "月1,000メッセージ" },
          { description: "日本国内100%ホスティング" },
          { description: "データの再利用なし" },
        ],
        features: [
          { section: "Features", name: "チームメンバー", value: 3 },
          { section: "Features", name: "アクティブ文書", value: 10 },
          { section: "Features", name: "月間メッセージ数", value: 1000 },
          { section: "Features", name: "自律型AIエージェント", value: false },
          { section: "Security", name: "日本国内100%ホスティング", value: true },
          { section: "Security", name: "データの再利用なし", value: true },
          {
            section: "Security",
            name: "専用サーバーへのデプロイ",
            value: false,
          },
          { section: "Support", name: "メールサポート", value: true },
          { section: "Support", name: "電話サポート", value: false },
          { section: "Support", name: "専任カスタマー担当", value: false },
        ],
      },
      {
        name: "Aliénor Pro",
        slug: "pro",
        popular: true,
        description: "妥協のない性能とセキュリティを求める企業向け。",
        priceMonthly: 249,
        href: "/pricing#book",
        highlights: [
          { description: "メンバー無制限" },
          { description: "文書無制限*" },
          { description: "メッセージ無制限*" },
          { description: "自律型AIエージェント" },
          { description: "日本国内100%ホスティング" },
          { description: "データの再利用なし" },
        ],
        features: [
          { section: "Features", name: "チームメンバー", value: "無制限" },
          { section: "Features", name: "アクティブ文書", value: "無制限*" },
          { section: "Features", name: "月間メッセージ数", value: "無制限*" },
          { section: "Security", name: "日本国内100%ホスティング", value: true },
          { section: "Features", name: "自律型AIエージェント", value: true },
          { section: "Security", name: "データの再利用なし", value: true },
          {
            section: "Security",
            name: "専用サーバーへのデプロイ",
            value: false,
          },
          { section: "Support", name: "メールサポート", value: true },
          { section: "Support", name: "電話サポート", value: true },
          { section: "Support", name: "専任カスタマー担当", value: false },
        ],
      },
      {
        name: "Aliénor Business",
        slug: "business",
        description: "機密性の高い業界向けに、専用インフラで提供。",
        priceMonthly: 349,
        href: "/pricing#book",
        highlights: [
          { description: "メンバー無制限" },
          { description: "文書無制限*" },
          { description: "メッセージ無制限*" },
          { description: "自律型AIエージェント" },
          { description: "日本国内100%ホスティング" },
          { description: "データの再利用なし" },
          { description: "専用インフラ" },
        ],
        features: [
          { section: "Features", name: "チームメンバー", value: "無制限" },
          { section: "Features", name: "アクティブ文書", value: "無制限*" },
          { section: "Features", name: "月間メッセージ数", value: "無制限*" },
          { section: "Features", name: "自律型AIエージェント", value: true },
          { section: "Security", name: "日本国内100%ホスティング", value: true },
          { section: "Security", name: "データの再利用なし", value: true },
          {
            section: "Security",
            name: "専用サーバーへのデプロイ",
            value: true,
          },
          { section: "Support", name: "メールサポート", value: true },
          { section: "Support", name: "電話サポート", value: true },
          { section: "Support", name: "専任カスタマー担当", value: true },
        ],
      },
    ],
    actions: { cta: "製品を試す", benefitsTitle: "含まれる内容" },
    table: {
      caption: "プラン比較",
      included: "含まれるプラン",
      notIncluded: "含まれないプラン",
    },
    testimonial: {
      title: "ご質問はありますか？",
      description: "最適なプラン選定や料金、運用方法についてチームがご案内します。",
      contact: "お問い合わせ",
      demo: "デモを予約",
    },
    faq: {
      title: "よくある質問",
      items: [
        {
          question: "データはどこにホストされていますか？",
          answer: (
            <>
              PDF、抽出コンテンツ、ベクターデータベース、DB、キャッシュなど、すべてのデータは東京にある認証データセンターで日本国内にのみ保管されます。
              <br />
              <br />
              インフラはGDPRに準拠しており、データがEU域外に出ることはありません。
              <br />
              <br />
              処理はすべてプライベートで安全な日本のサーバー上で行われます。
            </>
          ),
        },
        {
          question: "データがAIモデルの学習に使われることはありますか？",
          answer:
            "いいえ。\n\n社内外を問わず、AIモデルの学習や改善にデータが使われることはありません。\n\nMistral AIやOpenAIなど使用するモデルは、やり取りを保存したり送信データを再利用したりしない設定になっています。",
        },
        {
          question: "AIモデルはすべての文書を閲覧できますか？",
          answer:
            "いいえ。\n\n質問に回答する際、モデルに送るのは関連性の高い抜粋のみです。\n\nこれにより、露出を最小限に抑えつつ、精度の高い回答を提供します。",
        },
        {
          question: "誰が文書にアクセスできますか？",
          answer:
            "安全な認証を経た貴社の承認ユーザーのみがインターフェースと文書にアクセスできます。\n\n第三者や技術ベンダー、当社チームであっても、明示的な許可なしに内容へアクセスすることはありません。",
        },
        {
          question: "利用停止時にすべてのデータを削除できますか？",
          answer:
            "はい。\n\n文書、抽出テキスト、ベクターインデックス、検索履歴など、すべてのデータをいつでも削除できます。\n\n書面で確認する完全削除手順もご用意しています。",
        },
        {
          question: "外部サービスと通信しない構成はありますか？",
          answer:
            "はい。\n\nBusinessプランでは、OpenAIやMistralの外部APIを使わず、日本国内の専用サーバー上だけで処理を行います。\n\n機密性が求められる業界でも安心してご利用いただけます。",
        },
        {
          question: "回答に使用するモデルは何ですか？",
          answer:
            "OpenAI（ゼロフットプリントポリシー）: データは保存・学習に利用されず、処理後すぐに削除され、ホスティングも日本国内のみです。\n\nMistral AI: 高性能なフランス製モデルで、API経由またはGPU上のローカル実行（Businessプラン）に対応します。",
        },
        {
          question: "GDPRに準拠していますか？",
          answer:
            "はい。以下の点でGDPRに完全準拠しています:\n• 日本国内ホスティング\n• 商業利用や学習目的でデータを使用しない\n• 消去権の尊重\n• ユーザープロファイリングなし\n• 監査ログやモニタリングはリクエストに応じて提供",
        },
      ],
    },
  },
  blog: {
    metadata: {
      title: "ブログ",
      description:
        "プロダクトの新機能、企業ニュース、日々の業務を改善するヒントをお届けします。",
    },
    heroTitle: "Aliénorの最新情報とアップデート。",
    heroLead:
      "プロダクトの進化や企業ニュース、業務効率化のヒントを定期的にお知らせします。",
    featuredTitle: "注目の記事",
    categories: { all: "すべてのカテゴリ" },
    rss: "RSSフィード",
    empty: "記事を準備中です。",
    readMore: "続きを読む",
    previous: "前へ",
    next: "次へ",
  },
  blogPost: { back: "ブログに戻る" },
  company: {
    metadata: {
      title: "企業情報",
      description:
        "日本でホストされた安全なAIで、ナレッジマネジメントを変革することが使命です。",
    },
    header: {
      title: "知識を成長の原動力に。",
      lead: "社内の知を解放し、セキュリティと主権性を最優先に組織のパフォーマンスを高めることが私たちの使命です。",
      missionTitle: "私たちの使命",
      missionBody: [
        "Aliénorの目標は一つ。社内のあらゆる情報に素早く、賢くアクセスできる高性能な日本製ソリューションを提供することです。文書、議事録、データベース、会話——必要な要素を見つけ、理解し、文脈を踏まえて提示することで、意思決定を加速させます。",
        "日本で設計・ホストされるAliénorは、プライバシーとデータ主権を徹底して守ります。最高水準の機密性と性能を両立し、信頼できる社内検索ツールを提供することが私たちの野望です。知識を競争力に変え、信頼を損なうことはありません。",
      ],
      cta: "料金を見る",
      quotes: [
        {
          quote: "「重要な情報をすぐに見つけられるので、時間を無駄にしません。」",
          author: "クレール・デュポン",
          role: "COO",
        },
        {
          quote: "「データの主権性とセキュリティは不可欠でした。Aliénorはその安心を与えてくれます。」",
          author: "マルク・ルフェーブル",
          role: "IT責任者",
        },
      ],
      metrics: [
        { label: "平均検索時間", value: 3, suffix: "秒" },
        { label: "インデックス済み文書", value: 1, suffix: "M+" },
        { label: "日本国内ホスティング率", value: 100, suffix: "%" },
        { label: "平均削減時間", value: 60, suffix: "%" },
      ],
    },
  },
  legal: {
    terms: {
      trigger: "利用規約",
      title: "利用規約",
      description: "透明性のある利用ルール、責任の共有、そして適切な運用のために。",
      principlesTitle: "主な方針",
      principles: [
        "公正で法令に沿った非乱用の利用。",
        "知的財産権と第三者の権利を尊重すること。",
        "違法・悪意・差別的・わいせつなコンテンツの禁止。",
        "ベストエフォートでの可用性確保：サービス品質向上に最善を尽くします。",
        "規約違反が繰り返される場合、契約を終了することがあります。",
      ],
      assistanceTitle: "サポート",
      assistance:
        "ご質問やトラブルはサポートチームへお問い合わせください。迅速かつ実践的な解決を目指します。",
      close: "閉じる",
    },
    privacy: {
      trigger: "プライバシーポリシー",
      title: "プライバシーポリシー",
      description: "データの機密性・セキュリティ・コントロールを最優先にします。",
      commitmentsTitle: "主なコミットメント",
      commitments: [
        "データ最小化：必要なものだけを収集します。",
        "適用可能な範囲で通信時・保存時とも暗号化します。",
        "アクセス・訂正・削除などの権利行使を透明に提供します。",
        "データの販売は行わず、契約で管理された必要最小限の委託先のみと共有します。",
        "保存期間を限定し、明確なスケジュールで削除または匿名化します。",
      ],
      contactTitle: "プライバシー窓口",
      contact:
        "権利行使やご質問はチームまでご連絡ください。可能な限り迅速に対応します。",
      close: "閉じる",
    },
  },
  feedback: {
    trigger: "ヘルプセンター",
    title: "ヘルプセンター",
    description:
      "製品についての質問がありますか？カテゴリを選び、件名と詳細を入力してください。チームがすぐに回答します。",
    subjectLabel: "件名",
    subjectPlaceholder: "質問のタイトル",
    categoryLabel: "カテゴリ",
    categoryPlaceholder: "カテゴリを選択",
    categories: [
      "料金",
      "製品",
      "機能",
      "請求",
      "アカウントとセキュリティ",
      "連携・インテグレーション",
      "データとプライバシー",
      "その他",
    ],
    questionLabel: "ご質問内容",
    questionPlaceholder:
      "詳細を入力してください（背景、手順、スクリーンショット、提案など）",
    close: "閉じる",
    submit: "リクエストを送信",
  },
};
