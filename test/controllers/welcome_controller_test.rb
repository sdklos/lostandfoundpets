require 'test_helper'

class WelcomeControllerTest < ActionDispatch::IntegrationTest
  test "should get welcome" do
    get welcome_welcome_url
    assert_response :success
  end

  test "should get home" do
    get welcome_home_url
    assert_response :success
  end

end
