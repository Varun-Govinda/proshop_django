from behave import *
# from selenium import webdriver
import requests 

@given(u'we are on home page')
def step_impl(context):
    requests.get('http://127.0.0.1:8000')
    # browser = webdriver.Chrome()
    # browser.get('http://127.0.0.1:8000/')

@when(u'we click a product')
def step_impl(context):
    # browser.get('http://127.0.0.1:8000/#/product/1')
    requests.get('http://127.0.0.1:8000/api/products/1/')


@then(u'I should see product info')
def step_impl(context):
    assert "description" in requests.get('http://127.0.0.1:8000/api/products/1/').text
    # browser.get('http://127.0.0.1:8000/#/product/1')


# @given('we have behave installed')
# def step_impl(context):
#     pass

# @when('we implement a test')
# def step_impl(context):
#     assert True is not False

# @then('behave will test it for us!')
# def step_impl(context):
#     assert context.failed is False
