# frozen_string_literal: true

# == Schema Information
#
# Table name: mixin_messages
#
#  id                      :uuid             not null, primary key
#  category                :string
#  content(decrypted data) :string
#  processed_at            :datetime
#  raw                     :json
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#  conversation_id         :uuid
#  message_id              :uuid
#  user_id                 :uuid
#
# Indexes
#
#  index_mixin_messages_on_message_id  (message_id) UNIQUE
#
require 'test_helper'

class MixinMessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
