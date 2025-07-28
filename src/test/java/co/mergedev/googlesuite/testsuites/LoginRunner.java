package co.mergedev.googlesuite.testsuites;

import org.junit.platform.suite.api.ConfigurationParameter;
import org.junit.platform.suite.api.IncludeEngines;
import org.junit.platform.suite.api.SelectClasspathResource;
import org.junit.platform.suite.api.Suite;

import static io.cucumber.core.options.Constants.*;

@Suite
@IncludeEngines("cucumber")
@SelectClasspathResource("features/login")
@ConfigurationParameter(key = PLUGIN_PROPERTY_NAME, value = "io.cucumber.core.plugin.SerenityReporterParallel,pretty,timeline:build/test-results/timeline")
@ConfigurationParameter(key = GLUE_PROPERTY_NAME, value = "co.mergedev.googlesuite.stepdefinitions")
@ConfigurationParameter(key = SNIPPET_TYPE_PROPERTY_NAME, value = "camelcase")
//@ConfigurationParameter(key = FILTER_TAGS_PROPERTY_NAME, value = "")
public class LoginRunner {}