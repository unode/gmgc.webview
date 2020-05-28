vegaEmbed('#vis-main', "specs/scores.json")
vegaEmbed('#vis-homologs', "specs/map.json")
vegaEmbed('#vis-genebiome', "specs/genebiome.json")
// TODO Krona integration
// vegaEmbed('#vis-taxonomy', "specs/taxonomy.json")
vegaEmbed('#vis-funccat', "specs/func-cats.json")
vegaEmbed('#vis-smart', "specs/smart-doms.json")
vegaEmbed('#vis-pfam', "specs/pfam-doms.json")
vegaEmbed('#vis-eggnog', "specs/eggnog-ogs.json")

// vegaEmbed('#vis-eggnog', "spec/...").then(res =>
//   res.view
//   .insert("myData", mydata)
//   .run()
// )

