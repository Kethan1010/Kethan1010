@Test1
Feature: A test Feature file

    Scenario Outline: a few automation
    Given First automation script "Kethan"
    When Login into gmail application with "<username>" and "<password>"

Examples:
| username | password |
| kethan001 | kethu@001 |
| kethan002 | kethu@002 |