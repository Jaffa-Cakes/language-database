import csv

# UTILITY FUNCTIONS

def loader(csv_name, class_name, list):
    with open('./csv-importer/' + csv_name, 'r', encoding="utf8") as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        first = True
        for row in csv_reader:
            if first:
                first = False
                continue
            if len(row) < class_name.columns:
                print("Row with invalid columns found")
                continue
            list.append(class_name(row))

# CSV ROW DEFINITIONS

class Language:
    columns = 8

    def __init__(self, row) -> None:
        self.source = row[0]
        self.temp_id = row[1]
        self.entry_id = row[2]
        self.gloss_translation_in_original = row[3]
        self.language_from_original = row[4]
        self.fuzzy_forms = row[5]
        self.sonetic_transliteration = row[6]
        self.type = row[7]
        # There are more columns, but they are not used in the import

class Source:
    columns = 15

    def __init__(self, row) -> None:
        self.name = row[0]
        self.id = row[1]
        self.scans_in_src_file = row[2]
        self.in_database = row[3]
        self.name_of_file = row[4]
        self.source = row[5]
        self.publication_status = row[6]
        self.document_type = row[7]
        self.collector = row[8]
        self.consultants = row[9]
        self.date = row[10]
        self.location = row[11]
        self.languages = row[12]
        self.language_name = row[13]
        self.notes = row[14]
        # There are more columns, but they are not used in the import

class BoonSource:
    columns = 4

    def __init__(self, row) -> None:
        self.source = row[0]
        self.gloss_translation_in_original = row[1]
        self.language_from_original = row[2]
        self.possibly_wathaurong = row[3]
        # There are more columns, but they are not used in the import

class RootGloss:
    columns = 10

    def __init__(self, row) -> None:
        self.regularised_spelling = row[0]
        self.regulatised_english_gloss = row[1]
        self.synonym = row[2]
        self.semantic_one = row[3]
        self.semantic_two = row[4]
        self.word_class = row[5]
        self.entry_id_one = row[6]
        self.entry_id_two = row[7]
        self.entry_id_three = row[8]
        self.notes = row[9]
        # There are more columns, but they are not used in the import

class AiatsisWordList:
    columns = 14

    def __init__(self, row) -> None:
        self.gloss_count = row[0]
        self.category = row[1]
        self.number = row[2]
        self.gloss = row[3]
        self.gloss_form = row[4]
        self.semantic_field = row[5]
        self.part_of_speech = row[6]
        self.other_note = row[7]
        self.change_note = row[8]
        self.note = row[9]
        self.scientific_name = row[10]
        self.kin_designation = row[11]
        self.rec_id = row[12]
        self.basic = row[13]
        # There are more columns, but they are not used in the import

class FilteredResults:
    columns = 4

    def __init__(self, row) -> None:
        self.source = row[0]
        self.unique_id = row[1]
        self.entry_id = row[2]
        self.translation_in_original = row[3]
        self.language_form_in_original = row[4]
        # There are more columns, but they are not used in the import

# CSV IMPORTS

languages = []
loader("language.csv", Language, languages)

sources = []
loader("source.csv", Source, sources)

boon_sources = []
loader("boon_source.csv", BoonSource, boon_sources)

root_glosses = []
loader("root_gloss.csv", RootGloss, root_glosses)

aiatsis_word_lists = []
loader("aiatsis_word_list.csv", AiatsisWordList, aiatsis_word_lists)

filtered_results = []
loader("filtered_results.csv", FilteredResults, filtered_results)