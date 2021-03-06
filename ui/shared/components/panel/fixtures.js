/** This file contains sample state to use for tests */

export const USER = {
  date_joined: '2015-02-19T20:22:50.633Z',
  email: 'test@broadinstitute.org',
  first_name: '',
  id: 1,
  is_active: true,
  is_staff: true,
  is_superuser: true,
  last_login: '2017-03-14T17:44:53.403Z',
  last_name: '',
  username: 'test',
}

export const VARIANT = {
  alt: "T",
  mainTranscript: {
    aminoAcids: "P/X", hgvsc: "ENST00000456743.1:c.862delC", hgvsp: "ENSP00000389625.1:p.Leu288SerfsTer10", lof: "HC",
    lofFilter: "", lofFlags: "SINGLE_EXON", proteinPosition: "287", symbol: "OR2M3", geneId: 'ENSG00000228198',
    majorConsequence: 'frameshift_variant'
  },
  chrom: "1",
  clinvar: { clinsig: "", variantId: null },
  familyGuids: ["F011652_1"],
  functionalData: [
    { color: "#311B92", dateSaved: "2018-05-24T15:30:04.483Z", metadata: "An updated note",
      metadataTitle: null, name: "Biochemical Function", user: "hsnow@broadinstitute.org" },
    { color: "#880E4F", dateSaved: "2018-05-24T15:34:01.365Z", metadata: "2", metadataTitle: "LOD Score",
      name: "Genome-wide Linkage", user: "hsnow@broadinstitute.org" },
  ],
  genomeVersion: "37",
  geneIds: ['ENSG00000228198'],
  genotypes: {
    NA19675: {
      ab: 1,
      ad: "0,74",
      alleles: ["T", "T"],
      cnvs: {LRR_median: null, LRR_sd: null, array: null, caller: null, cn: null, freq: null, size: null},
      dp: "74",
      filter: "pass",
      gq: 99,
      numAlt: 2,
      pl: "358,132,0",
    },
    NA19678: {
      ab: 0,
      ad: "77,0",
      alleles: ["TC", "TC"],
      cnvs: {LRR_median: null, LRR_sd: null, array: null, caller: null, cn: null, freq: null, size: null},
      dp: "77",
      filter: "pass",
      gq: 99,
      numAlt: 0,
      pl: "0,232,3036",
    },
    NA19679: {
      ab: 0,
      ad: "71,0",
      alleles: ["TC", "TC"],
      cnvs: {LRR_median: null, LRR_sd: null, array: null, caller: null, cn: null, freq: null, size: null},
      dp: "71",
      filter: "pass",
      gq: 99,
      numAlt: 0,
      pl: "0,213,1918",
    },
  },
  hgmd: {accession: null, class: null},
  liftedOverChrom: "",
  liftedOverGenomeVersion: "38",
  liftedOverPos: "",
  notes: [],
  origAltAlleles: ["T"],
  projectGuid: 'R0237_1000_genomes_demo',
  pos: 248367227,
  populations: {
    callset: { af: 0.03, ac: 7, an: 1032 },
    g1k: { af: 0 },
    exac: { af: 0.0006726888333653661, hemi: null, hom: null },
    gnomad_genomes: { af: null, ac: null, an: null },
    gnomad_exomes: { af: 0.00006505916317651364 },
    topmed: {},
  },
  predictions: { cadd: '27.2' },
  ref: "TC",
  tags: [
    {
      category: "Collaboration", color: "#668FE3", dateSaved: "2018-05-25T21:00:51.260Z", name: "Review",
      searchParameters: null, tagGuid: "VT1726942_1248367227_r0390_100", user: "hsnow@broadinstitute.org",
    },
    {
      category: "CMG Discovery Tags",
      color: "#44AA60",
      dateSaved: "2018-03-23T19:59:12.262Z",
      name: "Tier 1 - Phenotype not delineated",
      searchParameters: "https://seqr.broadinstitute.org/project/1kg/family/1/mendelian-variant-search#search/c2edbeae/results",
      tagGuid: "VT1708635_1248367227_r0390_100",
      user: "hsnow@broadinstitute.org",
    },
  ],
  transcripts: {
    ENSG00000228198: [
      {
        aminoAcids: "P/X",
        canonical: "YES",
        cdnaPosition: "897",
        cdsPosition: "859",
        codons: "Ccc/cc",
        consequence: "frameshift_variant",
        hgvsc: "ENST00000456743.1:c.862delC",
        hgvsp: "ENSP00000389625.1:p.Leu288SerfsTer10",
        isChosenTranscript: true,
        transcriptId: "ENST00000456743",
      }
    ],
  },
  variantId: "SV0000002_1248367227_r0390_100",
  xpos: 1248367227,
}

export const GENE = {
  constraints: {
    lof: { constraint: 0.0671997116609769, rank: 8248, totalGenes: 18225 },
    missense: { constraint: -0.7885573790993861, rank: 15052, totalGenes: 18225 },
  },
  phenotypeInfo: { mimPhenotypes: [], orphanetPhenotypes: [] },
  locusLists: [],
  geneId: "ENSG00000228198",
  symbol: "OR2M3",
}

export const LOCUS_LIST_GUID = "LL00132_2017_monogenic_ibd_gen"
export const LOCUS_LIST = {
  canEdit: false,
  createdBy: "cjmoran@mgh.harvard.edu",
  createdDate: "2017-11-03T00:01:51.912Z",
  description: "",
  isPublic: true,
  lastModifiedDate: "2018-05-02T00:01:24.013Z",
  locusListGuid: LOCUS_LIST_GUID,
  name: "2017 Monogenic IBD Gene List",
  numEntries: 60,
  parsedItems: { items:  [{ geneId: 'ENSG00000164458' }], itemMap: { 'TTN': { geneId: 'ENSG00000164458', symbol: 'TTN' } } }
}

export const STATE1 = {
  projectsByGuid: {
    R0237_1000_genomes_demo: {
      createdDate: '2016-05-16T05:37:08.634Z',
      deprecatedLastAccessedDate: '2017-03-14T15:15:42.580Z',
      deprecatedProjectId: '1kg',
      description: '',
      discoveryTags: [],
      isMmeEnabled: true,
      isPhenotipsEnabled: true,
      lastModifiedDate: '2017-03-14T17:37:32.712Z',
      mmePrimaryDataOwner: 'PI',
      name: '1000 Genomes Demo',
      phenotipsUserId: '1kg',
      projectCategoryGuids: [],
      projectGuid: 'R0237_1000_genomes_demo',
    },
  },
  familiesByGuid: {
    F011652_1: {
      analysisNotes: 'added note',
      analysisStatus: 'Rcpc',
      analysisSummary: '',
      causalInheritanceMode: 'unknown',
      description: '',
      displayName: '1',
      familyGuid: 'F011652_1',
      familyId: '1',
      internalCaseReviewNotes: '',
      internalCaseReviewSummary: '',
      pedigreeImage: '/media/pedigree_images/1_w677Gyf.png',
      analysedBy: [],
      individualGuids: [
        'I021476_na19678',
        'I021474_na19679',
        'I021475_na19675',
      ],
    },
  },
  individualsByGuid: {
    I021474_na19679: {
      affected: 'N',
      caseReviewStatus: 'I',
      caseReviewStatusLastModifiedBy: null,
      caseReviewStatusLastModifiedDate: null,
      createdDate: '2016-12-05T10:28:21.303Z',
      displayName: '',
      individualGuid: 'I021474_na19679',
      individualId: 'NA19679',
      lastModifiedDate: '2017-03-14T17:37:34.002Z',
      maternalId: '',
      paternalId: '',
      phenotipsData: {
        clinicalStatus: {
          clinicalStatus: 'affected',
        },
        contact: {
          email: 'test@broadinstitute.org',
          name: '1kg',
          user_id: '1kg',
        },
        date: '2016-05-16T06:39:08.000Z',
        date_of_birth: '',
        date_of_death: '',
        ethnicity: {
          maternal_ethnicity: [],
          paternal_ethnicity: [],
        },
        external_id: 'NA19679',
        family_history: {},
        features: [
          {
            category: 'HP:0001507',
            id: 'HP:0011405',
            label: 'Childhood onset short-limb short stature',
            observed: 'yes',
            type: 'phenotype',
          },
          {
            category: 'HP:0001507',
            id: 'HP:0004325',
            label: 'Decreased body weight',
            observed: 'yes',
            type: 'phenotype',
          },
          {
            category: 'HP:0040064',
            id: 'HP:0009821',
            label: 'Forearm undergrowth',
            observed: 'yes',
            type: 'phenotype',
          },
          {
            category: 'HP:0003011',
            id: 'HP:0001290',
            label: 'Generalized hypotonia',
            observed: 'yes',
            type: 'phenotype',
          },
          {
            category: 'HP:0000707',
            id: 'HP:0001250',
            label: 'Seizures',
            observed: 'yes',
            type: 'phenotype',
          },
          {
            category: 'HP:0000924',
            id: 'HP:0002652',
            label: 'Skeletal dysplasia',
            observed: 'yes',
            type: 'phenotype',
          },
        ],
        id: 'P0005221',
        last_modification_date: '2016-11-15T20:24:05.000Z',
        last_modified_by: '1kg',
        life_status: 'alive',
        links: {
          href: 'http://localhost:8080/rest/patients/P0005221',
          rel: 'self',
        },
        meta: {
          hgncRemote_version: '2016-11-15T04:51:40.469Z',
          hgnc_version: '2015-08-09T17:45:23.025Z',
          hpo_version: 'releases/2015-09-15',
          omim_version: '2015-10-07T18:26:19.654Z',
          phenotips_version: '1.2.6',
        },
        nonstandard_features: [],
        prenatal_perinatal_history: {},
        prenatal_perinatal_phenotype: {
          negative_prenatal_phenotype: [],
          prenatal_phenotype: [],
        },
        report_id: 'P0005221',
        reporter: '1kg',
        sex: 'F',
        solved: {
          status: 'unsolved',
        },
        specificity: {
          date: '2017-03-14T17:37:33.993Z',
          score: 0.8353186513436692,
          server: 'local-omim',
        },
      },
      phenotipsPatientId: 'P0005221',
      sex: 'F',
      sampleGuids: [],
    },
    I021475_na19675: {
      affected: 'A',
      caseReviewStatus: 'I',
      caseReviewStatusLastModifiedBy: null,
      caseReviewStatusLastModifiedDate: null,
      createdDate: '2016-12-05T10:28:21.303Z',
      displayName: '',
      individualGuid: 'I021475_na19675',
      individualId: 'NA19675',
      lastModifiedDate: '2017-03-14T17:37:33.838Z',
      maternalId: 'NA19679',
      paternalId: 'NA19678',
      phenotipsData: {
        clinicalStatus: {
          clinicalStatus: 'affected',
        },
        contact: {
          email: 'harindra@broadinstitute.org',
          name: '1kg',
          user_id: '1kg',
        },
        date: '2016-05-16T05:37:34.000Z',
        date_of_birth: '',
        date_of_death: '',
        ethnicity: {
          maternal_ethnicity: [],
          paternal_ethnicity: [],
        },
        external_id: 'NA19675',
        family_history: {},
        features: [
          {
            category: 'HP:0001626',
            id: 'HP:0001631',
            label: 'Defect in the atrial septum',
            observed: 'no',
            type: 'phenotype',
          },
          {
            category: 'HP:0003011',
            id: 'HP:0001324',
            label: 'Muscle weakness',
            observed: 'yes',
            type: 'phenotype',
          },
        ],
        id: 'P0005219',
        last_modification_date: '2016-12-08T01:30:37.000Z',
        last_modified_by: '1kg',
        life_status: 'alive',
        links: {
          href: 'http://localhost:8080/rest/patients/P0005219',
          rel: 'self',
        },
        meta: {
          hgncRemote_version: '2016-12-07T05:47:00.563Z',
          hgnc_version: '2015-08-09T17:45:23.025Z',
          hpo_version: 'releases/2015-09-15',
          omim_version: '2015-10-07T18:26:19.654Z',
          phenotips_version: '1.2.6',
        },
        nonstandard_features: [],
        prenatal_perinatal_history: {},
        prenatal_perinatal_phenotype: {
          negative_prenatal_phenotype: [],
          prenatal_phenotype: [],
        },
        rejectedGenes: [
          {
            comments: '15 genes, lab A, 2013, NGS, negative ',
            gene: 'LGMD panel',
          },
        ],
        report_id: 'P0005219',
        reporter: '1kg',
        sex: 'M',
        solved: {
          status: 'unsolved',
        },
        specificity: {
          date: '2017-03-14T17:37:33.832Z',
          score: 0.34326660169343903,
          server: 'local-omim',
        },
      },
      phenotipsPatientId: 'P0005219',
      sex: 'M',
      sampleGuids: [],
    },
    I021476_na19678: {
      affected: 'N',
      caseReviewStatus: 'E',
      caseReviewStatusLastModifiedBy: null,
      caseReviewStatusLastModifiedDate: null,
      createdDate: '2016-12-05T10:28:21.303Z',
      displayName: '',
      individualGuid: 'I021476_na19678',
      individualId: 'NA19678',
      lastModifiedDate: '2017-03-14T17:37:33.676Z',
      maternalId: '',
      paternalId: '',
      phenotipsData: {
        clinicalStatus: {
          clinicalStatus: 'affected',
        },
        contact: {
          email: 'test@broadinstitute.org',
          name: '1kg',
          user_id: '1kg',
        },
        date: '2016-05-16T06:39:07.000Z',
        date_of_birth: '',
        date_of_death: '2008-01-01',
        ethnicity: {
          maternal_ethnicity: [],
          paternal_ethnicity: [],
        },
        external_id: 'NA19678',
        family_history: {},
        id: 'P0005220',
        last_modification_date: '2016-12-06T23:58:28.000Z',
        last_modified_by: '1kg',
        life_status: 'deceased',
        links: {
          href: 'http://localhost:8080/rest/patients/P0005220',
          rel: 'self',
        },
        meta: {
          hgncRemote_version: '2016-12-06T05:44:36.433Z',
          hgnc_version: '2015-08-09T17:45:23.025Z',
          hpo_version: 'releases/2015-09-15',
          omim_version: '2015-10-07T18:26:19.654Z',
          phenotips_version: '1.2.6',
        },
        prenatal_perinatal_history: {},
        prenatal_perinatal_phenotype: {
          negative_prenatal_phenotype: [],
          prenatal_phenotype: [],
        },
        report_id: 'P0005220',
        reporter: '1kg',
        sex: 'M',
        solved: {
          status: 'unsolved',
        },
        specificity: {
          date: '2017-03-14T17:36:11.641Z',
          score: 0,
          server: 'monarchinitiative.org',
        },
      },
      phenotipsPatientId: 'P0005220',
      sex: 'M',
      sampleGuids: [],
    },
  },
  samplesByGuid: {},
  project: {
    createdDate: '2016-05-16T05:37:08.634Z',
    deprecatedLastAccessedDate: '2017-03-14T15:15:42.580Z',
    deprecatedProjectId: '1kg',
    description: '',
    discoveryTags: [],
    isMmeEnabled: true,
    isPhenotipsEnabled: true,
    lastModifiedDate: '2017-03-14T17:37:32.712Z',
    mmePrimaryDataOwner: 'PI',
    name: '1000 Genomes Demo',
    phenotipsUserId: '1kg',
    projectCategoryGuids: [],
    projectGuid: 'R0237_1000_genomes_demo',
  },
  user: USER,
  caseReviewTableState: {
    familiesFilter: 'ALL',
    familiesSortOrder: 'FAMILY_NAME',
    familiesSortDirection: 1,
    showDetails: true,
  },
  richTextEditorModal: {
    isVisible: true,
    title: 'test title with unicØde',
    formSubmitUrl: 'http://test/',
  },
  pedigreeImageZoomModal: {
    isVisible: true,
    family: {
      familyGuid: 'F011652_1',
      displayName: '1',
      familyId: '1',
    },
  },
  phenotipsModal: {
    isVisible: true,
  },
  genesById: { 'ENSG00000228198': GENE },
  genesLoading: {},
  savedVariantsByGuid: { SV0000002_1248367227_r0390_100: VARIANT },
  locusListsByGuid: { [LOCUS_LIST_GUID]: LOCUS_LIST },
}

export const STATE_WITH_2_FAMILIES = {
  familiesByGuid: {
    F011652_1: {
      familyGuid: 'F011652_1',
      displayName: '1',
      familyId: '1',
      individualGuids: [
        'I021476_na19678_1',
        'I021474_na19679_1',
        'I021475_na19675_1',
      ],
    },
    F011652_2: {
      familyGuid: 'F011652_2',
      displayName: '2',
      familyId: '2',
      individualGuids: [
        'I021476_na19678_2',
        'I021474_na19679_2',
        'I021475_na19675_2',
      ],
    },
  },
  individualsByGuid: {
    I021476_na19678_1: {
      affected: 'N',
      caseReviewStatus: 'E',
      caseReviewStatusLastModifiedBy: null,
      caseReviewStatusLastModifiedDate: '2016-12-05T10:28:00.000Z',
      createdDate: '2016-12-05T10:28:00.000Z',
      sex: 'F',
    },
    I021475_na19675_1: {
      affected: 'A',
      caseReviewStatus: 'I',
      caseReviewStatusLastModifiedBy: null,
      caseReviewStatusLastModifiedDate: '2016-12-05T10:29:00.000Z',
      createdDate: '2016-12-05T10:29:00.000Z',
      sex: 'M',
    },
    I021474_na19679_1: {
      affected: 'N',
      caseReviewStatus: 'I',
      caseReviewStatusLastModifiedBy: null,
      caseReviewStatusLastModifiedDate: '2016-12-05T10:30:00.000Z',
      createdDate: '2016-12-05T10:30:00.000Z',
      sex: 'M',
    },

    I021476_na19678_2: {
      affected: 'N',
      caseReviewStatus: 'G',
      caseReviewStatusLastModifiedBy: null,
      caseReviewStatusLastModifiedDate: '2016-12-06T10:28:00.000Z',
      createdDate: '2016-12-06T10:28:00.000Z',
      sex: 'F',
    },
    I021475_na19675_2: {
      affected: 'A',
      caseReviewStatus: 'I',
      caseReviewStatusLastModifiedBy: null,
      caseReviewStatusLastModifiedDate: '2016-12-06T10:29:00.000Z',
      createdDate: '2016-12-06T10:29:00.000Z',
      sex: 'M',
    },
    I021474_na19679_2: {
      affected: 'N',
      caseReviewStatus: 'I',
      caseReviewStatusLastModifiedBy: null,
      caseReviewStatusLastModifiedDate: '2016-12-06T10:30:00.000Z',
      createdDate: '2016-12-06T10:30:00.000Z',
      sex: 'M',
    },
  },
  caseReviewTableState: {
    familiesFilter: 'ACCEPTED',
    familiesSortOrder: 'FAMILY_NAME',
    familiesSortDirection: -1,
    showDetails: true,
  },
}
