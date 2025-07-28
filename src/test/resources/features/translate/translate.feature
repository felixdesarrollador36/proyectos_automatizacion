Feature: As Google user
         I need a tool for translate text

  Scenario: I as user need translate words in different languages
    Given I would like translate a text
    When I translate "hola mundo" from "Español" to "Inglés"
    Then I should see the translation "Hello world"

  Scenario Outline: I as user need translate words in different languages using outline
    Given I would like translate a text
    When I translate "<word>" from "<sourceLanguage>" to "<resultLanguage>"
    Then I should see the translation "<resultWord>"
    Examples:
      | word | sourceLanguage | resultLanguage | resultWord |
      | hola mundo | Español | Inglés | Hello world |
      | perro | Español | Inglés | dog |

  Scenario Outline: I as user need translate words in different languages using outline and datatable
    Given I would like translate a text
    When I translate the information
      | word | sourceLanguage | resultLanguage |
      | <word> | <sourceLanguage> | <resultLanguage> |
    Then I should see the translation "<resultWord>"

    Examples:
      | word | sourceLanguage | resultLanguage | resultWord |
      | hola mundo | Español | Inglés | Hello world |
      | perro | Español | Inglés | dog |